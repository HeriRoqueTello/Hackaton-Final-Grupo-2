<template>
  <main class="">
    <section class="relative bg-[#3015FD] text-white px-4 md:px-20 pb-20 pt-44">
      <div class="lg:w-[44.5625rem]">
        <h2 class="text-4xl lg:text-[3.375rem] font-bold leading-tight mb-8">¡Explota todo tu potencial tecnológico!</h2>
        <p class="text-xl">Con nuestros programas de especialización</p>
      </div>
    </section>
    <div class="fixed md:hidden bottom-4 right-4 flex flex-col items-end gap-4 z-50">
      <div class="w-auto bg-green-400 p-3 rounded-full cursor-pointer">
        <img class="w-7 h-7" src="/WhatsApp_logo.svg" alt="Whatsapp logo">
      </div>
      <div class="flex flex-row items-center px-4 py-3 bg-[#FF1558] text-white rounded-3xl">
        <PencilIcon class="h-5" />
        <p class="font-semibold">Inscríbete</p>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center w-full py-16 px-4 md:px-20">
      <div>
        <span class="text-sm font-semibold">Con el respaldo de:</span>
        <div class="flex flex-row gap-4 mt-4">
          <img class="h-5" src="/Intercorp_logo.png" alt="Intercorp logo">
          <img class="h-10" src="/Idat_logo.png" alt="Idat logo">
          <img class="bg-black h-8" src="/Zegel_logo.png" alt="Zegel logo">
        </div>
      </div>
      <ArrowIcon class="w-12 h-12 hidden md:block" />
      <div class="w-auto hidden md:block bg-green-400 p-2 rounded-full cursor-pointer">
        <img class="w-6 h-6" src="/WhatsApp_logo.svg" alt="Whatsapp logo">
      </div>
    </div>
    <section class="w-full px-[10px] pb-[137px] min-[1366px]:w-[66%] min-[1366px]:px-[86px] min-[1366px]:pb-[160px]">
      <h3 class="text-[#000425] text-base font-bold mb-[30px] min-[1366px]:text-xl min-[1366px]:text-[#222222]">
        Conoce nuestros Programas de Especialización
      </h3>
      <!-- Componente Card 1 -->
      <CursosList></CursosList>
    </section>
    <section class="bg-gradient-to-b from-[#3015FD] to-[#5640FF] h-[30rem] md:h-72 px-4 md:px-56 relative flex flex-col justify-end py-4 md:justify-center gap-4 text-white">
      <img class="absolute h-96 lg:h-auto -top-28 left-11 lg:-top-24 lg:-left-28" src="../assets/Chinita_pacha.webp" alt="Chinita Pacha">
      <h4 class="text-lg font-bold">Sé parte de la comunidad</h4>
      <p class="text-sm md:w-2/4">Programas semi-presenciales para el desarrollo de habilidades de programación a lo largo de todo el Stack tecnológico.</p>
      <p class="text-sm md:w-2/4">Al finalizar sabrás cómo crear una página web y desarrollar la lógica detrás del funcionamiento de una aplicación, así como formar parte de una gran comunidad de desarrolladores</p>
    </section>
    <section class="px-4 md:px-20 my-20">
      <h4 class="text-lg font-semibold">Beneficios</h4>
      <!-- Componente 2 -->
    </section>
    <footer class="bg-[#000425] text-white px-4 md:px-20 py-4">
      <span class="text-sm font-semibold">Con el respaldo de:</span>
      <div class="flex flex-row gap-4 mt-4">
        <img class="h-5 " src="/Intercorp_logo.svg" alt="Intercorp logo">
        <img class="h-10" src="/Idat_logo.svg" alt="Idat logo">
        <img class="bg-black h-8" src="/Zegel_logo.png" alt="Zegel logo">
      </div>
    </footer>
  </main>
</template>
<script>
  import ArrowIcon from '@/components/Icons/ArrowIcon.vue'
  import PencilIcon from '@/components/Icons/PencilIcon.vue'
  import CursosList from '@/components/CursosList.vue'
  export default{
    components: {
      ArrowIcon,
      PencilIcon,
      CursosList
    }
  }
</script>