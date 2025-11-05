<template>
  <div class="max-w-md mx-auto h-screen flex flex-col">
    <!-- Top panel: 45% of viewport height on mobile, full width -->
           <div class="back-image  relative min-h-[60vh] w-full flex items-center justify-center">
             
             <div class="absolute inset-0 bg-green-600/90 text-white">

              <div class ="relative z-10 flex flex-col items-center p-4 sm:p-8  text-2xl">
                <img src="../assets/images/luis-face-fat.png" alt="Profile" class="md:mt-1  size-30  sm:size-45   rounded-full object-cover " />
                <div class="sm:mt-6 text-xl sm:text-4xl  font-bold" >Luis Rengel</div>

                <div class=" text-xl sm:text-2xl mt-2">Asesor Inmobiliario</div>
                
                <div class="mt-1 sm:mt-8 text-xl sm:text-2xl text-center font-semibold" > 
                  <h4 class="mb-3">Cuentas Oficiales</h4>
                  
                  <div class="flex items-center space-x-8 sm:space-x-12 justify-center">
                    <img src="../assets/images/brand-facebook.svg" alt="facebook-brand" class="filter brightness-0 invert sm:h-10 sm:w-10">
                    <img src="../assets/images/brand-instagram.svg" alt="instagram-brand " class="filter brightness-0 invert sm:h-10 sm:w-10"></img>
                    <img src="../assets/images/brand-tiktok.svg" alt="tiktok-brand" class="filter brightness-0 invert sm:h-10 sm:w-10"></img>

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
       <nuxt-link to="/" 
        class="inline-flex item-center justify-centertransition duration-300 ease-in-out 
           shadow-lg "
        >
        <button type="button"
        class=" cursor-pointer w-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-4 px-4 rounded-xl">
       
        Plusbienes.com
       </button> 
      </nuxt-link>
       

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