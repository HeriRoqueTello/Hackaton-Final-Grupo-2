<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav :class="`${color} flex flex-row h-[60px] justify-between px-2 lg:px-20 items-center text-white`">
    <RouterLink to="/">
      <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    </RouterLink>
    <div class="flex flex-row gap-4">
      <RouterLink to="/checkout">
        <CartIcon class="hidden md:block cursor-pointer" />
      </RouterLink>
      <MenuIcon class="cursor-pointer" />
    </div>
  </nav>
</template>
<script>
import CartIcon from '../Icons/CartIcon.vue';
import MenuIcon from '../Icons/MenuIcon.vue';

export default {
  props: {
    color: {
      type: String,
      default: 'bg-primary'
    }
  },
  components: {
    CartIcon,
    MenuIcon
  },
  data(){
    return {

    }
  }
}
</script>
<style>
  
</style>