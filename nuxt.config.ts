// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/supabase', '@pinia/nuxt', '@nuxt/image'],
  
  // SSR enabled for API and Nitro features
  ssr: true,

  supabase: {
    redirect: false,
  },

  // Hybrid Rendering Rules
  routeRules: {
    // Static Pages (SSG)
    '/': { prerender: true },
    '/Bio': { prerender: true },
    
    // Dynamic Routes (SSR/API)
    '/api/**': { ssr: true, cors: true },
  },

  runtimeConfig: {
    // Private keys (available only on server)
    
    public: {
      // Public variables
    }
  },

  vite: {
    plugins: [tailwindcss() as any],
    build: {
      sourcemap: false
    }
  },
})
