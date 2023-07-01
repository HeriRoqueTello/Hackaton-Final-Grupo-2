<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" />
    </div>
  </header>
  <div class="px-10 py-5 md:px-20 md:py-10">
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