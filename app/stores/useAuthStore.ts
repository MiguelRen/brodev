import { defineStore } from 'pinia'
import type { User } from '~/interfaces/User.interface'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)
  const client = useSupabaseClient()
  const supabaseUser = useSupabaseUser()

  const isAdmin = computed(() => {
    // En una arquitectura estática, verificamos el rol desde los metadatos del usuario 
    // o desde una tabla pública con RLS.
    return user.value?.roles.includes('ADMIN') || false
  })

  const login = async (credentials: { email: string; password: string }) => {
    try {
      console.log('Iniciando login directo con Supabase Auth (Client-Side)...')
      const { data, error } = await client.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })

      if (error) throw error
      
      // El watch se encargará de llamar a fetchUser
      return data
    } catch (err: any) {
      console.error('Error en login:', err.message)
      throw err
    }
  }

  const fetchUser = async () => {
    const sUser = supabaseUser.value
    if (!sUser) return

    try {
      // Obtenemos los roles a través de la tabla intermedia user_roles y roles
      const { data: rawUserData, error: userError } = await client
        .from('users')
        .select(`
          is_active,
          user_roles (
            roles (
              name
            )
          )
        `)
        .eq('id', sUser.id)
        .maybeSingle()

      const userData = rawUserData as {
        is_active: boolean | null;
        user_roles: {
          roles: {
            name: string | null;
          } | null;
        }[] | null;
      } | null;

      if (userError) console.warn('Error al obtener datos del usuario:', userError.message)

      // Obtenemos el perfil
      const { data: rawProfileData } = await client
        .from('profiles')
        .select('full_name')
        .eq('id', sUser.id)
        .maybeSingle()

      const profileData = rawProfileData as {
        full_name: string | null;
      } | null;

      // Extraer nombres de roles
      const roles = (userData?.user_roles?.map(ur => ur.roles?.name).filter(Boolean) as string[]) || []

      user.value = {
        id: sUser.id,
        email: sUser.email!,
        roles: roles,
        isActive: userData?.is_active ?? true,
        createdAt: sUser.created_at,
        profile: {
          id: sUser.id,
          fullName: profileData?.full_name || '',
          updatedAt: new Date().toISOString()
        }
      }
    } catch (err) {
      console.error('Error sincronizando usuario:', err)
    }
  }

  // Sincronizar el estado de Pinia con el usuario de Supabase
  watch(supabaseUser, (newUser) => {
    if (newUser) {
      fetchUser()
    } else {
      user.value = null
    }
  }, { immediate: true })

  const logout = async () => {
    try {
      await client.auth.signOut()
      user.value = null
      navigateTo('/')
    } catch (err) {
      console.error('Error al cerrar sesión:', err)
    }
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
