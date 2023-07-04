<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" class="hidden md:flex" />
    </div>
  </header>
  <div class="md:px-20 md:py-10 md:grid md:grid-cols-3 md:gap-x-6">
    <ShoppingList class="col-span-2" />
    <Next class="" />
  </div>
</template>
<script>
import Navbar from '@/components/general/Navbar.vue';
import ShoppingList from '@/components/shop/ShoppingList.vue';
import Next from '@/components/shop/Next.vue';

export default {
  components: {
    Navbar,
    ShoppingList,
    Next,
  }  
}
</script>
<style>
  
</style>