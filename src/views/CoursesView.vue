<template>
  <header>
    <div>
      <Navbar />
    </div>
  </header>
  <main class="py-8">
    <Cursos />
  </main>
</template>
<script>
import Navbar from '@/components/general/Navbar.vue'
import Cursos from '@/components/general/Cursos.vue'
export default {  
  components: {
    Navbar,
    Cursos,
  },
}
</script>
<style>
  
</style>