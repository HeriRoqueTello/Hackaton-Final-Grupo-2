<template>
<Navbar />
  <div class="flex items-center justify-left min-h-screen ml-5">
    <div class="max-w-lg w-full bg-white rounded-lg p-6">
      <h1 class="text-4xl font-bold mb-6">Pago Cancelado</h1>
      <p class="mb-6">!Lo sentimos!. Tu pago fue cancelado, <a href="#" class="text-[#5640FF]">¿Te gustaría realizar nuevamente el proceso?</a></p>
      <button class="bg-[#5640FF] text-white font-bold rounded-xl text-center px-10 py-3 mt-4">Reintentar</button>
    </div>
  </div>

</template>
<script>
import Navbar from '../components/general/Navbar.vue';

export default {

    components: {
        Navbar
  },
  data(){
    return {

    }
  }
}
</script>
<style>

</style>