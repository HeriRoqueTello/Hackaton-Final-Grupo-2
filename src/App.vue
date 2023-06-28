<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/general/Navbar.vue';

export default {
  components: {
    Navbar
  }
}

</script>

<template>
  <header>
    <div>
      <Navbar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
