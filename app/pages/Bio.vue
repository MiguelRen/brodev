<template>
  <div class="w-screen h-screen flex flex-col">
    <!-- A part begin -->
           <div class="back-image relative w-full h-1/2 sm:w-full sm:h-2/3 lg:w-full lg:h-3/5 flex items-center justify-center">
             
             <div class="absolute  w-full h-full inset-0 bg-[#00214f]/90 text-white">

              <div class ="relative z-10 flex flex-col  items-center ">
                <img src="../assets/images/luis-face-fat.png" alt="Profile" class=" mt-10 w-30 h-30 sm:w-45 sm:h-45 rounded-full object-cover " />
                 <div class="mt-5 sm:mt-8 lg:mt-5 text-4xl sm:text-5xl font-bold" >Luis Rengel</div>

                  <div class="sm:mt-2 text-2xl sm:text-4xl font-semibold ">Asesor Inmobiliario</div>
                

                
                <div class="mt-6 sm:mt-10 lg:mt-7 text-2xl justify-center " > 
                  <h4 class=" font-semibold text-center sm:text-4xl ">Cuentas Oficiales</h4>
                  
                  <div class="flex justify-around gap-8 sm:gap-20">
                    <img src="../assets/images/brand-facebook.svg" alt="facebook-brand" class="mt-4  size-15 sm:size-22 filter brightness-0 invert">
                    <img src="../assets/images/brand-instagram.svg" alt="instagram-brand " class="mt-4 size-15 sm:size-22 filter brightness-0 invert"></img>
                    <img src="../assets/images/brand-tiktok.svg" alt="tiktok-brand" class="mt-4 size-15 sm:size-22 filter  brightness-0 invert"></img>

                  </div>

                  
                </div>

              </div>
             </div>
           </div> 
<!-- A part end -->
 <!-- B part begin -->

  <div class="h-1/2 lg:h-2/5 flex flex-col items-center justify-center lg:w-3/5 mx-auto gap-8 lg:gap-4 text-center
text-white text-3xl sm:text-5xl font-bold">
      <button type="button"
        class="w-full bg-[#638db6] hover:bg-green-700  py-6 sm:py-6  px-4  rounded-xl">Mensaje
        WhatsApp</button>
      <button type="button"
        class="w-full bg-[#638db6] hover:bg-blue-700  py-6 sm:py-6 px-4 rounded-xl">Llama Ahora
        !!!</button>
       <nuxt-link to="/" 
        class=" 
            cursor-pointer w-full bg-[#638db6] hover:bg-violet-700  py-6 sm:py-6 px-4 rounded-xl"
        >
        
        Plusbienes.com
   
      </nuxt-link>
       

    </div>
    <!-- B part end -->
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