<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class=" flex flex-row h-[60px] justify-around items-center bg-[#3B00FF] text-white">
    <RouterLink to="/">
      <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    </RouterLink>
    <div class="flex flex-row gap-4">
      <!-- <RouterLink to="/">Home</RouterLink> -->
      <!-- <RouterLink to="/about">About</RouterLink> -->
      <CartIcon />
      <MenuIcon />
    </div>
  </nav>
</template>
<script>
import CartIcon from '../Icons/CartIcon.vue';
import MenuIcon from '../Icons/MenuIcon.vue';

export default {
  components: {
    CartIcon,
    MenuIcon
  }
}
</script>
<style>
  
</style>