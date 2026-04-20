<script lang="ts" setup>
import LoginLayout from '~/components/LoginLayout.vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

// Form State
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

// Redirect if already logged in
watchEffect(() => {
  if (user.value) {
    router.push('/admin/dashboard') // Or wherever you want to redirect
  }
})

const handleLogin = async () => {
  try {
    loading.value = true
    errorMessage.value = ''

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    // Supabase handles the JWT automatically in the session.
    // If you need to verify "active" status beyond Auth, 
    // you would check a 'profiles' table here.
    
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('status')
      .eq('id', data.user?.id)
      .single()

    if (profile && profile.status !== 'active') {
      await supabase.auth.signOut()
      throw new Error('Su cuenta no está activa. Contacte al administrador.')
    }

    router.push('/')
  } catch (error: any) {
    errorMessage.value = error.message || 'Error al iniciar sesión'
  } finally {
    loading.value = false
  }
}

definePageMeta({
  layout: false // We use our custom LoginLayout component inside the template
})
</script>

<template>
  <LoginLayout>
    <div class="w-full max-w-md bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 shadow-2xl">
      <div class="text-center mb-10">
        <h1 class="text-4xl font-playfair text-white mb-2">Bienvenido</h1>
        <p class="text-amber-500 font-bold uppercase tracking-widest text-xs">Portal Administrativo</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="space-y-2">
          <label class="block text-white/70 text-sm font-bold ml-1">Correo Electrónico</label>
          <input 
            v-model="email"
            type="email" 
            required
            placeholder="admin@plusbienes.com"
            class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-white/70 text-sm font-bold ml-1">Contraseña</label>
          <input 
            v-model="password"
            type="password" 
            required
            placeholder="••••••••"
            class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
          />
        </div>

        <div v-if="errorMessage" class="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm text-center font-bold">
          {{ errorMessage }}
        </div>

        <button 
          type="submit" 
          :disabled="loading"
          class="w-full py-4 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-[#00214f] font-black text-lg rounded-2xl transition-all shadow-lg shadow-amber-500/20 transform hover:-translate-y-1"
        >
          <span v-if="loading">Verificando...</span>
          <span v-else>Iniciar Sesión</span>
        </button>
      </form>

      <div class="mt-8 text-center">
        <NuxtLink to="/" class="text-white/40 hover:text-white text-sm transition-colors">
          ← Volver al inicio
        </NuxtLink>
      </div>
    </div>
  </LoginLayout>
</template>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}
</style>
