<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/general/Navbar.vue';
import MobileForm from './components/general/MobileForm.vue';
import FormHome from './components/general/FormHome.vue';

export default {
  components: {
    Navbar,
    MobileForm,
    FormHome
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
