<template>
  <section class="w-full px-[10px] min-[1366px]:w-[66%] min-[1366px]:px-[86px]">
    <h2 class="text-[#000425] text-base font-bold mb-[30px] min-[1366px]:text-xl min-[1366px]:text-[#222222]">
      Conoce nuestros Programas de Especialización
    </h2>
    <ul
      class="flex flex-col items-center gap-y-[15px] min-[1366px]:justify-start min-[1366px]:gap-y-[40px] min-[1366px]:gap-x-[30px] min-[1366px]:flex-wrap min-[1366px]:flex-row">
      <li v-for="curso in cursos" :key="curso.id"
        class="relative w-full max-w-[355px] h-[222px] rounded-[10px] bg-center bg-no-repeat bg-cover flex flex-col justify-end p-[20px] gap-y-[15px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[10px] before:bg-gradient-to-b from-[#00042500] to-[#000425] min-[1366px]:max-w-[344px] min-[1366px]:h-[320px]"
        :style="`background-image: url(${curso.image});`">
        <h3 class="text-[#fff] text-xl font-medium z-0">{{ curso.titulo }}</h3>
        <RouterLink to="/" v-if="curso.activo" class="flex gap-x-[12px] items-center text-[#fff] text-sm font-bold self-end z-0">
          <img src="./Icons/plus-circle.png" alt="More Icon"> Ver más
        </RouterLink>
        <span v-else class="text-[#8b9099] text-sm font-bold self-end z-0">
          Proximamente
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cursos: [
        {
          image: './src/components/imgs/front_end.png',
          titulo: 'Desarrollo Front-End',
          activo: true,
          id: 1
        },
        {
          image: './src/components/imgs/back_end.png',
          titulo: 'Desarrollo Back-End',
          activo: false,
          id: 2
        },
        {
          image: './src/components/imgs/apps.png',
          titulo: 'Desarrollo de Aplicativos Móviles',
          activo: true,
          id: 3
        },
        {
          image: './src/components/imgs/ux.png',
          titulo: 'Diseño de Experiencia De Usuario',
          activo: false,
          id: 4
        },
        {
          image: './src/components/imgs/videojuegos_2.png',
          titulo: 'Desarrollo de Videojuegos',
          activo: true,
          id: 5
        },
        {
          image: './src/components/imgs/marketing_digital2.png',
          titulo: 'Marketing Digital',
          activo: false,
          id: 6
        },
        {
          image: './src/components/imgs/data.png',
          titulo: 'Data Analytics',
          activo: true,
          id: 7
        },
        {
          image: './src/components/imgs/frontend2.png',
          titulo: 'Desarrollo Front-End Avanzado',
          activo: false,
          id: 8
        },
      ]
    };
  }
};
</script>
