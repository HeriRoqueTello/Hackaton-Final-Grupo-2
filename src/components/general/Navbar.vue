<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav :class="`${color} flex flex-row h-[60px] justify-between px-2 lg:px-20 items-center text-white`">
    <a v-if="checkout" href="/">
      <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    </a>
    <RouterLink v-else to="/">
      <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    </RouterLink>
    <div v-if="checkout" class="flex flex-row gap-4 relative">
      <a class="select-none hidden md:block" href="/cursos">Cursos</a>
      <a href="/checkout">
        <CartIcon class="hidden md:block cursor-pointer" />
      </a>
      <MenuIcon @click="onMenu" v-model="menu" class="cursor-pointer" />
      <div :class="`${menu ? 'block' : 'hidden'} bg-secondary absolute top-[2.625rem] p-4 right-0 z-50 rounded-b-lg`">
        <ul class="space-y-2">
          <li class="cursor-pointer"><a href="/register">Register</a></li>
          <li class="cursor-pointer"><a href="/login">Login</a></li>
        </ul>
      </div>
    </div>
    <div v-else class="flex flex-row gap-4 relative">
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
    },
    checkout: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
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