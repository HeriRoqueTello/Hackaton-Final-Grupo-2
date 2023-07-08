<template>
  <header>
    <div class="">
      <Navbar />
    </div>
  </header>
  <main class="relative animate-fade-in">
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
              class="inline-block botones rounded bg-indigo-600 mt-10 mr-8 px-9 py-3 text-sm font-bold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" 
              @click="addToCart()"
            >
              Agregar al carrito
            </button>
            <button
              class="inline-block botones rounded bg-indigo-600 px-9 mt-10 font-bold py-3 text-sm text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
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
import { useCartStore } from '@/stores/cart.store.js';
import Navbar from '@/components/general/Navbar.vue';
import Loader from '@/components/general/Loader.vue';

export default {
  data() {
    return {
      cartStore: useCartStore(),
      cursosStore: useCoursesStore(),
      curso: null,
      id: null,
      loading: false,
      showCertificado: false
    };
  },
  methods: {
    async getDetalles(id) {
      this.loading = false;
      this.cursosStore
        .getDetalleCurso(id)
        .then((curso) => {
          this.curso = curso;
          this.loading = true;
        })
        .catch((error) => {
          console.error(error);
          this.loading = true;
        });
    },
    addToCart() {
      this.cartStore.addProduct(this.id);
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetalles(this.id);
  },
  components: {
    Navbar,
    Loader
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease;
}

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
  height: 93.7vh;
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
  opacity: 0.45;
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

.botones {
  width: 100%;
}

@media (min-width: 768px) {
  .botones {
    width: auto;
  }

}

@media (max-width: 767px) {
  .description {
    left: 50%;
    transform: translateX(-50%);
    margin-top: -50%;
    font-size: 8px;
  }

  .certificado-container {
    position: static;
    width: 100%;
    text-align: center;
  }

  .botones {
    width: 100%;
    margin-top: 1.5rem;
  }
}


</style>
