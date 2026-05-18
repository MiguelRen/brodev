import { useAuthStore } from '~/stores/useAuthStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  const auth = useAuthStore()

  // Wait for store to hydrate if user exists but profile doesn't
  if (user.value && !auth.user) {
    await auth.fetchUser()
  }

  // Redirect to login if user is not authenticated and trying to access a protected page
  if (!user.value && to.path.startsWith('/admin')) {
    return navigateTo('/login')
  }

  // Admin only authorization
  if (to.path.startsWith('/admin') && !auth.user?.roles?.includes('ADMIN')) {
    // We allow the check even if auth.user is loading because fetchUser is called above
    if (user.value) return navigateTo('/') 
  }
})
