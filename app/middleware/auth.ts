import { useAuthStore } from '~/stores/useAuthStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore()
  const user = useSupabaseUser()

  // En SSG, el usuario puede tardar un momento en hidratarse en el cliente
  // Si estamos en una ruta protegida y no hay usuario, redirigimos
  if (!user.value && to.path.startsWith('/admin')) {
    return navigateTo('/login')
  }

  // Si hay usuario pero el store no está cargado, fetchUser se encarga vía el watch del store
  // pero podemos forzarlo aquí si es necesario para el primer render
  if (user.value && !auth.user) {
    await auth.fetchUser()
  }

  // Verificación de ADMIN (opcional, dependiendo de si quieres que otros usuarios entren al admin)
  if (to.path.startsWith('/admin') && user.value && !auth.isAdmin) {
    // Si necesitas que solo ADMIN entren, descomenta la siguiente línea
    // return navigateTo('/') 
  }
})
