<template>
  <div class="max-w-md mx-auto h-screen flex flex-col">
    <!-- Top panel: 45% of viewport height on mobile, full width -->
    <div
      class="h-[60vh] w-full bg-green-500 flex flex-col items-center text-white"
    >
      <img
        src="../assets/images/luis-face-fat.png"
        alt="Profile"
        class="rounded-full h-36 w-36 mt-4 object-contain"
      />
      <div class="mt-4 text-lg font-semibold">Luis Rengel</div>

      <div class="text-sm opacity-90">Asesor Inmobiliario</div>
      <div class="mt-3">Cuentas Oficiales de </div>
    </div>

    <div class="p-4 flex-1">
      <!-- Additional content goes here -->
    </div>

    <div class="p-4 flex flex-col gap-4">
      <button type="button" class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full">Mensaje WhatsApp</button>
      <button type="button" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full">Llama Ahora !!!</button>
      <button type="button" class="w-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-4 px-4 rounded-full">Plusbienes.com</button>
      
      <!-- Additional content goes here -->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<!-- Using Tailwind utility classes for layout and rounded image; removed scoped CSS -->
