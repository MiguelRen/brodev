<template>
  <div class="w-screen min-h-screen flex flex-col">
    <!-- A part begin -->
    <div
      class="back-image w-full flex items-center justify-center py-12 sm:py-20 lg:py-28 relative"
    >
      <div class="absolute inset-0 bg-[#00214f]/90"></div>

      <div class="w-full text-white relative">
        <div class="relative z-10 flex flex-col items-center">
          <img
            src="../assets/images/luis-traje-fondo-naranja.png"
            alt="Profile"
            class="mt-10 w-30 h-30 sm:w-45 sm:h-45 rounded-full object-cover object-top"
          />
          <div class="mt-5 sm:mt-8 lg:mt-5 text-4xl sm:text-5xl font-bold">
            Luis Rengel
          </div>

          <div class="sm:mt-2 text-2xl sm:text-4xl font-semibold">
            Operador Inmobiliario
          </div>

          <div class="mt-6 sm:mt-10 lg:mt-7 text-2xl justify-center">
            <h4 class="font-semibold text-center sm:text-4xl">
              Cuentas Oficiales
            </h4>

            <div class="flex justify-around gap-8 sm:gap-20">
              <img
                src="../assets/images/brand-facebook.svg"
                alt="facebook-brand"
                class="mt-4 size-15 sm:size-22 filter brightness-0 invert"
              />
              <img
                src="../assets/images/brand-instagram.svg"
                alt="instagram-brand"
                class="mt-4 size-15 sm:size-22 filter brightness-0 invert"
              />
              <img
                src="../assets/images/brand-tiktok.svg"
                alt="tiktok-brand"
                class="mt-4 size-15 sm:size-22 filter brightness-0 invert"
              />
            </div>
          </div>
          <div class="flex w-full justify-center p-4 my-8">
            <div
              class="relative w-full max-w-sm overflow-hidden shadow-xl aspect-[9/16] rounded-2xl bg-black"
            >
              <iframe
                class="absolute top-0 left-0 w-full h-full"
                src="https://youtube.com/embed/inli71mMCFs?si=bbqEjfxFw4rRcSk_"
                title="Real State Video  | Luis Rengel Asesor Inmobiliario | Plusbienes.com"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share;
                "
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="text-xl text-center text font-bold">
            <p class="my-3">
              Técnico Operador Inmobiliario <br />
              UTU-2024 Uruguay
            </p>
            <p class="my-3">
              Licenciado en Administración <br />
              Universidad de Oriente 2008-Venezuela
            </p>
            <p class="my-5">
              Trayectoria en Ventas inmobiliarias,<br />
              Banca y Seguros
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- A part end -->

    <!-- B part begin -->
    <div
      class="py-8 flex flex-col items-center justify-center lg:w-3/5 mx-auto gap-8 lg:gap-4 text-center text-white text-3xl sm:text-5xl font-bold"
    >
      <button
        type="button"
        class="w-full bg-amber-600 hover:bg-green-700 py-6 sm:py-6 px-4 rounded-xl"
      >
        <a
          href="https://wa.me/584128371049?text=Hola, quisiera más información sobre el servicio."
          target="_blank"
        >
          <!-- class="w-64 py-3 text-lg font-semibold text-center text-white transition-colors bg-blue-500 rounded-lg shadow-md hover:bg-blue-600" -->
          Mensaje WhatsApp
        </a>
      </button>
      <button
        type="button"
        class="w-full bg-amber-600 hover:bg-blue-700 py-6 sm:py-6 px-4 rounded-xl"
      >
        <a href="tel:+584128371049">
          <!-- class="w-64 py-3 text-lg font-semibold text-center text-white transition-colors bg-blue-500 rounded-lg shadow-md hover:bg-blue-600" -->
          Llama Ahora !!!
        </a>
      </button>
      <nuxt-link
        to="/"
        class="cursor-pointer w-full bg-amber-600 hover:bg-violet-700 py-6 sm:py-6 px-4 rounded-xl"
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
  min-height: 56vh;
}

.video-container {
  width: 100%;
  max-width: 720px;
  margin: 1rem auto 0;
}
.video-container .responsive-video,
.video-container video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  max-height: 55vh;
  object-fit: contain;
}
@media (max-width: 1024px) {
  .video-container {
    max-width: 520px;
  }
}
@media (max-width: 640px) {
  .video-container {
    max-width: 320px;
    margin-top: 0.5rem;
  }
}
</style>
