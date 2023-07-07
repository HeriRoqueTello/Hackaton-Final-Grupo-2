<template>
  <header>
    <div class="">
      <Navbar />
    </div>
  </header>
  <main class="relative">
    <Loader v-if="!loading" />
    <div v-else class=" mx-auto">
      <section class="relative overflow-hidden">
        <div class="bg-image">
          <img :src="curso.imagen" :alt="curso.nombre" class="w-full h-full object-cover opacity-75 ">
          <div v-show="showCertificado" class="certificado-container w-2/5">
            <img :src="curso.certificado" alt="Certificado" class="w-4/5 rounded-lg drop-shadow-xl">
          </div>
        </div>
        <div class="description">
          <h1 class="text-4xl font-bold mb-4 text-left">{{ curso.nombre }}</h1>
          <p class="text-lg text-left">{{ curso.descripcion }}</p>
          <div class="items-start justify-start flex mt-5">
            <button
              class="inline-block rounded bg-indigo-600 mt-10 mr-8 px-9 py-4 text-sm font-bold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            >
              Agregar al carrito
            </button>
            <button
              class="inline-block rounded bg-indigo-600 px-9 mt-10 font-bold py-4 text-sm text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              @click="showCertificado = !showCertificado"
            >
              Ver Certificado
            </button>
          </div>
        </div>
      </section>
      
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
      loading: false,
      showCertificado: false
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.container {
  margin-left: auto;
  margin-right: auto;
}

h1, h2 {
  color: #000425;
  font-family: 'Roboto', sans-serif;
}

p {
  color: #333333;
  font-family: 'Roboto', sans-serif;
}

.bg-image {
  position: relative;
  height: 93.7vh; /* Ajusta la altura según sea necesario */
  transition: transform 0.5s ease-in-out;
}

.description {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-60%, -50%);
  text-align: center;
  padding: 20px;
  color: #fff;
}

.opacity-75 {
  opacity: 0.45; /* Ajusta la opacidad según sea necesario */
}

.certificado-container {
  position: absolute;
  top: 50%;
  right: -2%;
  transform: translate(0, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
