<template>
  <div class="w-screen h-screen flex flex-col">
    <!-- A part begin -->
           <div class="back-image relative w-full h-1/2 flex items-center justify-center">
             
             <div class="absolute  w-full h-full inset-0 bg-green-600/90 text-white">

              <div class ="relative z-10 flex flex-col items-center ">
                <img src="../assets/images/luis-face-fat.png" alt="Profile" class=" mt-10 w-30 h-30 rounded-full object-cover " />
                <div class="mt-5 text-4xl font-bold" >Luis Rengel</div>

                <div class="text-2xl font-semibold ">Asesor Inmobiliario</div>
                
                <div class="mt-6 text-2xl justify-center " > 
                  <h4 class=" font-semibold text-center ">Cuentas Oficiales</h4>
                  
                  <div class="flex justify-around gap-4">
                    <img src="../assets/images/brand-facebook.svg" alt="facebook-brand" class="mt-4  size-15  filter brightness-0 invert">
                    <img src="../assets/images/brand-instagram.svg" alt="instagram-brand " class="mt-4 size-15 filter brightness-0 invert"></img>
                    <img src="../assets/images/brand-tiktok.svg" alt="tiktok-brand" class="mt-4 size-15 filter brightness-0 invert"></img>

                  </div>

                  
                </div>

              </div>
             </div>
           </div> 
<!-- A part end -->
 <!-- B part begin -->

  <div class="h-1/2 flex flex-col items-center justify-center w-4/5 mx-auto gap-8 text-center">
      <button type="button"
        class="w-full bg-green-500 hover:bg-green-700 text-white text-3xl font-bold py-4  px-4 rounded-xl">Mensaje
        WhatsApp</button>
      <button type="button"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white text-3xl font-bold py-4 px-4 rounded-xl">Llama Ahora
        !!!</button>
       <nuxt-link to="/" 
        class=" 
            cursor-pointer w-full bg-violet-500 hover:bg-violet-700 text-white text-3xl font-bold py-4 px-4 rounded-xl"
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