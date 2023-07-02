<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav :class="`${color} flex flex-row h-[60px] justify-between px-2 lg:px-20 items-center text-white`">
    <RouterLink to="/">
      <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    </RouterLink>
    <div class="flex flex-row gap-4 relative">
      <RouterLink class="select-none hidden md:block" to="/cursos">Cursos</RouterLink>
      <RouterLink to="/checkout">
        <CartIcon class="hidden md:block cursor-pointer" />
      </RouterLink>
      <MenuIcon @click="onMenu" v-model="menu" class="cursor-pointer" />
      <div :class="`${menu ? 'block' : 'hidden'} bg-secondary absolute top-[2.625rem] p-4 right-0 z-50 rounded-b-lg`">
        <ul class="space-y-2">
          <li class="cursor-pointer"><RouterLink to="/register">Register</RouterLink></li>
          <li class="cursor-pointer"><RouterLink to="/login">Login</RouterLink></li>
        </ul>
      </div>
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
      menu: false
    }
  },
  methods: {
    onMenu() {
      this.menu ? this.menu = false : this.menu = true
    }
  }
}
</script>
<style>
  
</style>