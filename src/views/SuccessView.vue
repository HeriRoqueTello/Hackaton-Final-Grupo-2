<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" class="hidden md:flex" />
    </div>
  </header>
  <section>
    <p>
      We appreciate your business! If you have any questions, please email
      <a href="mailto:orders@example.com">orders@example.com</a>.
    </p>
  </section>
</template>
<script>
import Navbar from '@/components/general/Navbar.vue';
export default {  
  components: {
    Navbar,
  }
  
}
</script>
<style>
  
</style>