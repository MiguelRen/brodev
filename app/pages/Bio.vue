<template>
  <div class="max-w-md mx-auto h-screen flex flex-col">
    <!-- Top panel: 45% of viewport height on mobile, full width -->
           <div class="back-image  relative min-h-[60vh] w-full flex items-center justify-center">
             
             <div class="absolute inset-0 bg-green-600/90 text-white">

              <div class ="relative z-10 flex flex-col items-center p-4 sm:p-8  text-2xl">
                <img src="../assets/images/luis-face-fat.png" alt="Profile" class=" w-15 h-15 sm:w-24 sm:h-24 rounded-full object-cover " />
                <div class="mt-4 text-2xl sm:text:3xl  font-bold" >Luis Rengel</div>

                <div class=" text-base sm:text-xl mt-1">Asesor Inmobiliario</div>
                
                <div class="mt-4 sm:mt-4 text-sm sm:text-lg text-center" > 
                  <h4 class="mb-3">Cuentas Oficiales de</h4>
                  
                  <div class="flex items-center space-x-8  sm:space-x-8">
                    <img src="../assets/images/brand-facebook.svg" alt="facebook-brand" class="filter brightness-0 invert">
                    <img src="../assets/images/brand-instagram.svg" alt="instagram-brand " class="filter brightness-0 invert"></img>
                    <img src="../assets/images/brand-tiktok.svg" alt="tiktok-brand" class="filter brightness-0 invert"></img>

                  </div>

                  
                </div>

              </div>
             </div>
           </div> 


    <div class=" p-2 flex flex-col flex-1 justify-center gap-2">
      <button type="button"
        class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-xl">Mensaje
        WhatsApp</button>
      <button type="button"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl">Llama Ahora
        !!!</button>
      <button type="button"
        class="w-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-4 px-4 rounded-xl">
        <a href="../components/index.vue">Plusbienes.com</a>
        </button>

      <!-- Additional content goes here -->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<!-- Using Tailwind utility classes for layout and rounded image; removed scoped CSS -->
<style scoped>
.back-image {
  background-image: url('../assets/images/xp-background.jpg');
  background-size: cover;
  background-position: center;
}
  
</style>