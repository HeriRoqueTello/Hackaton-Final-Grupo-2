<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class=" flex flex-row h-[60px] justify-around items-center bg-[#3B00FF] text-white">
    <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    <div class="flex flex-row gap-4">
      <RouterLink to="/">Home</RouterLink>
      <!-- <RouterLink to="/about">About</RouterLink> -->
      <CartIcon />
    </div>
  </nav>
</template>
<script>
import CartIcon from '../Icons/CartIcon.vue';

export default {
  components: {
    CartIcon
  }
}
</script>
<style>
  
</style>