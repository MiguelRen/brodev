<template>
    <div class="max-w-md mx-auto h-screen flex flex-col">
        <!-- Top panel: 45% of viewport height on mobile, full width -->
        <div class="h-[60vh] w-full bg-green-500 flex flex-col items-center text-white">
            <img src="../assets/images/luis-face-fat.png" alt="Profile" class="rounded-full h-36 w-36  mt-4   object-contain  " />
            <div class="mt-4 text-lg font-semibold">Luis Rengel</div>

            <div class="text-sm opacity-90">Asesor Inmobiliario</div>
            <div class="mt-3">Cuentas Oficiales</div>
        </div>

        <div class="p-4 flex-1">
            <!-- Additional content goes here -->
        </div>
    </div>
</template>


<script lang="ts" setup>
</script>

<!-- Using Tailwind utility classes for layout and rounded image; removed scoped CSS -->