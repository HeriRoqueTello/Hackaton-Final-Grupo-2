<template>
  <header>
    <div>
      <Navbar />
    </div>
  </header>
  <main :class="`${!loading && 'h-[calc(100vh-60px)] flex justify-center items-center'} py-8 px-4 md:px-8 lg:px-20`">
    <Loader v-if="!loading" />
    <div v-else>
      <section>
        <h1>{{ curso.nombre }}</h1>
        <div>
          <img :src="curso.imagen" :alt="curso.nombre">
        </div>
        <p>{{ curso.descripcion }}</p>
      </section>
      <section>
        <h2>Certificado</h2>
        <img :src="curso.certificado" alt="Certificado">
      </section>
      <div>
        <button
          class="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { useCoursesStore } from '@/stores/courses.store.js';
import Navbar from '@/components/general/Navbar.vue'
import Loader from '@/components/general/Loader.vue'

export default {
  data() {
    return {
      cursosStore: useCoursesStore(),
      curso: null,
      id: null,
      loading: false
    }
  },
  methods: {
    async getDetalles(id) {
      this.loading = false
      this.cursosStore.getDetalleCurso(id)
      .then(curso => {
        this.curso = curso
        this.loading = true
      })
      .catch(error => {
        console.error(error);
        this.loading = true
      });
    }
  },
  created(){
    console.log(this.$route);
    this.id = this.$route.params.id
    this.getDetalles(this.id)
  },
  components: {
    Navbar,
    Loader
  }
};
</script>