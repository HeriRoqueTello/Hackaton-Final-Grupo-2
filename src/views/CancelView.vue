<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" class="hidden md:flex" />
    </div>
  </header>
  <section>
    <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
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