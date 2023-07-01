<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" class="hidden md:flex" />
    </div>
  </header>
  <div class="md:px-20 md:py-10">
    <ShoppingList class="" />
  </div>
</template>
<script>
import Navbar from '@/components/general/Navbar.vue';
import ShoppingList from '@/components/shop/ShoppingList.vue';

export default {
  components: {
    Navbar,
    ShoppingList
  }  
}
</script>
<style>
  
</style>