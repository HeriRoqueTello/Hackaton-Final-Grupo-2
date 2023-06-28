<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/general/Navbar.vue';
import CursosList from './components/CursosList.vue';

export default {
  components: {
    Navbar,
    CursosList
  }
}

</script>

<template>
  <header>
    <div>
      <Navbar />
      <CursosList />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
