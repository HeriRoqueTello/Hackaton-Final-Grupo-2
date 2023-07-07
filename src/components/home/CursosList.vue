<template>
  <ul
    class="flex flex-wrap justify-center items-center gap-y-[15px] gap-x-[20px] min-[1366px]:justify-start min-[1366px]:gap-y-[40px] min-[1366px]:gap-x-[30px]">
    <li v-for="curso in cursos" :key="curso.id"
      class="relative w-full max-w-[355px] h-[222px] rounded-[10px] bg-center bg-no-repeat bg-cover flex flex-col justify-end p-[20px] gap-y-[15px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[10px] min-[1366px]:max-w-[344px] min-[1366px]:h-[320px]" :class="curso.image ? 'before:bg-gradient-to-b from-[#00042500] to-[#000425]' : 'bg-[#000425]'"
      :style="`background-image: url(${curso.image});`">
      <h3 class="text-[#fff] text-xl font-medium z-0 Poppins">{{ curso.titulo }}</h3>
      <RouterLink to="/" v-if="curso.activo"
        class="flex gap-x-[12px] items-center text-[#fff] text-sm font-bold self-end z-0 Poppins">
        <img src="/icons/plus-circle.png" alt="More Icon"> Ver más
      </RouterLink>
      <span v-else class="text-[#8b9099] text-sm font-bold self-end z-0 Poppins">
        Proximamente
      </span>
    </li>
  </ul>
</template>

<script>
import { useCoursesStore } from '@/stores/courses.store.js';

export default {
  data() {
    return {
      cursosStore: useCoursesStore(),
      cursos: [
        {
          image: 'imgs/front_end.png',
          titulo: 'Desarrollo Front-End',
          activo: true,
          id: 1
        },
        {
          image: null,
          titulo: 'Desarrollo Back-End',
          activo: false,
          id: 2
        },
        {
          image: 'imgs/apps.png',
          titulo: 'Desarrollo de Aplicativos Móviles',
          activo: true,
          id: 3
        },
        {
          image: null,
          titulo: 'Diseño de Experiencia De Usuario',
          activo: false,
          id: 4
        },
        {
          image: 'imgs/videojuegos_2.png',
          titulo: 'Desarrollo de Videojuegos',
          activo: true,
          id: 5
        },
        {
          image: null,
          titulo: 'Marketing Digital',
          activo: false,
          id: 6
        },
        {
          image: 'imgs/data.png',
          titulo: 'Data Analytics',
          activo: true,
          id: 7
        },
        {
          image: null,
          titulo: 'Desarrollo Front-End Avanzado',
          activo: false,
          id: 8
        },
      ]
    }
  }
};
</script>
