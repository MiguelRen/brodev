import { defineStore } from 'pinia'
import type { User } from '~/interfaces/User.interface'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  const hasRole = (role: string) => {
    return user.value?.roles.includes(role) || false
  }

  const isAdmin = computed(() => hasRole('ADMIN'))

  const client = useSupabaseClient()

  const login = async (credentials: { email: string; password: string }) => {
    try {
      console.log('Iniciando login estático con Supabase Auth...')
      const { data, error } = await client.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })

      if (error) throw error

      // El usuario se sincroniza automáticamente gracias a useSupabaseUser()
      // Pero podemos cargar datos adicionales del perfil aquí si es necesario
      await fetchUser()
      return data
    } catch (err: any) {
      console.error('Error en authStore.login:', err.message)
      throw err
    }
  }

  const fetchUser = async () => {
    const supabaseUser = useSupabaseUser()
    if (!supabaseUser.value) {
      user.value = null
      return
    }

    try {
      // Obtenemos el perfil y roles directamente de las tablas públicas
      const { data, error } = await client
        .from('profiles')
        .select(`
          id,
          full_name,
          avatar_url,
          phone,
          bio,
          user_roles (
            roles (
              name
            )
          )
        `)
        .eq('id', supabaseUser.value.id)
        .single()

      if (error) throw error

      const roles = (data.user_roles as any[])?.map((ur: any) => ur.roles?.name) || []

      user.value = {
        id: supabaseUser.value.id,
        email: supabaseUser.value.email!,
        roles,
        isActive: true, // Supabase Auth maneja su propio estado de ban
        createdAt: supabaseUser.value.created_at,
        profile: {
          id: data.id,
          fullName: data.full_name,
          avatarUrl: data.avatar_url,
          phone: data.phone,
          bio: data.bio,
          updatedAt: new Date().toISOString()
        }
      }
    } catch (err) {
      console.error('Error al cargar perfil extendido:', err)
      // Fallback a datos básicos de auth
      user.value = {
        id: supabaseUser.value.id,
        email: supabaseUser.value.email!,
        roles: [],
        isActive: true,
        createdAt: supabaseUser.value.created_at
      }
    }
  }

  const logout = async () => {
    await client.auth.signOut()
    user.value = null
    navigateTo('/login')
  }

  return {
    user,
    isAuthenticated,
    isAdmin,
    login,
    fetchUser,
    logout
  }
})
