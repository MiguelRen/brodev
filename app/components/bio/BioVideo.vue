<template>
  <div class="flex w-full justify-center p-4 my-8">
    <div
      class="relative w-full max-w-sm overflow-hidden shadow-xl aspect-[9/16] rounded-2xl bg-black group cursor-pointer"
      @click="isLoaded = true"
    >
      <!-- YouTube Facade (Thumbnail) -->
      <div v-if="!isLoaded" class="absolute inset-0 w-full h-full flex items-center justify-center">
        <!-- Thumbnail from YouTube -->
        <nuxt-img
          src="https://img.youtube.com/vi/inli71mMCFs/maxresdefault.jpg"
          alt="Video Thumbnail"
          class="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
          loading="lazy"
        />
        <!-- Play Button Overlay -->
        <div class="relative z-10 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
          <svg class="w-10 h-10 text-[#00214f] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <!-- Actual Iframe loaded only on interaction -->
      <iframe
        v-else
        class="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/inli71mMCFs?autoplay=1"
        title="Real State Video | Luis Rengel Asesor Inmobiliario | Plusbienes.com"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isLoaded = ref(false)
</script>
