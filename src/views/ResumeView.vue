<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" class="hidden md:flex" />
    </div>
  </header>
  <div class="md:px-20 md:py-10 md:grid md:grid-cols-3 md:gap-x-6">
    <MyShopping class="col-span-2" />
    <Confirmation class="" />
  </div>
</template>
<script>
import Navbar from '@/components/general/Navbar.vue';
import MyShopping from '@/components/shop/MyShopping.vue';
import Confirmation from '@/components/shop/Confirmation.vue';

export default {
  components: {
    Navbar,
    MyShopping,
    Confirmation
  }  
}
</script>
<style>
  
</style>