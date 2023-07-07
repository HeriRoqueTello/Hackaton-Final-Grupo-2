<template>
  <section
    class="relative h-screen px-[20px] flex flex-col lg:justify-between min-[1366px]:justify-start">
    <div class="w-full flex justify-around pt-[20px] border-b-[1px] border-solid border-[#f8f8fa]">
      <button
        class="w-[50%] flex justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.16)] border-b-[5px] border-solid border-[#000425] min-[1366px]:border-[#222222]">
        <h4 class="text-[#000425] text-sm font-bold pb-[15px] min-[1366px]:text-[#222222]">
          Iniciar Sesión
        </h4>
      </button>
      <RouterLink class="w-[50%] flex justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.16)]" to="/register">
        <button>
          <h4 class="text-[#000425] pb-[15px] text-sm font-bold min-[1366px]:text-[#222222]">
            Registrarse
          </h4>
        </button>
      </RouterLink>
    </div>

    <div class="w-full">
      <div class="mt-[32px]">
        <p class="text-xs text-center text-[#222222] mb-[15px]">Puedes iniciar sesión con:</p>
        <div class="w-full flex justify-center gap-x-[17px]">
          <button class="border-solid border-[1px] hover:bg-secondary transition duration-300 ease-in-out border-[#8b9099] rounded-[5px]">
            <img src="/icons/Facebook-icon.png" alt="Facebook Icon" class="px-[17px] py-[13px]">
          </button>
          <button class="border-solid border-[1px] border-[#8b9099] rounded-[5px] hover:bg-secondary transition duration-300 ease-in-out">
            <img src="/icons/LinkedIn-icon.png" alt="LinkedIn Icon" class="p-[13px]">
          </button>
        </div>
        <p class="text-xs text-center text-[#222222] mt-[25px]">También puedes iniciar sesión con tu correo</p>
      </div>

      <form @submit="login" class="mt-[40px] flex flex-col">
        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] mb-[20px]">
          <input type="email" name="email" id="email" class="w-full text-xs font-bold text-[#222222] outline-0"
            autocomplete="off" v-model="email" required>
          <label for="email">Correo electrónico</label>
        </div>
        <div v-if="showPassword01"
        :class="{ 'border-[#F22A40]': errors.password01 }">
          <Field :type="typePassword01" name="password01" id="password01"
            class="w-full text-xs font-bold text-[#222222] outline-0" autocomplete="off" required v-model="password" />
          <label for="password01" class="Roboto">Contraseña</label>
          <img class="w-[16px] h-[11px] cursor-pointer" src="/icons/show-icon.png" alt="Show Password Icon"
            @click="showPassword01 = false">
        </div>
        <div v-else
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] mb-[20px] flex justify-between items-center">
          <input type="password" name="password01" id="password01"
            class="w-full text-xs font-bold text-[#222222] outline-0" autocomplete="off" required
            v-model="valuePassword01">
          <label for="password01">Contraseña</label>
          <img class="w-[16px] h-[11px] cursor-pointer" src="/icons/show-icon.png" alt="Show Password Icon"
            @click="showPassword01 = true">
        </div>
        <button
          type="submit" class="mt-[30px] mb-[60px] bg-primary w-full rounded-[10px] py-[18px] text-sm font-bold text-[#ffffff]">Login</button>
        <a href="#" class="text-[#894bf5] text-sm decoration-[#894bf5] underline font-semibold self-center">¿Olvidaste tu contraseña?</a>
      </form>
    </div>
  </section>
</template>

<script>
import { useLoginStore } from '@/stores/login.store.js';

export default {
  data() {
    return {
      email: '',
      valuePassword01: '',
    };  
  },

  methods: {
    async login(event) {
      event.preventDefault()
      const authStore = useLoginStore();
      try {
        const resp = await authStore.login(this.email, this.valuePassword01)
        console.log(resp);
        resp === 'Logeado' && this.$router.push('/')
      } catch (error) {
        console.error(error);
        console.log('Error al iniciar sesión')
      }
    },
  },

};
</script>

<style scoped>
label:not(label[for="accept"]) {
  font-size: 0.75rem;
  color: #c4c4c4;
  transition: all 0.5s;
  position: absolute;
  top: 20px;
  left: 15px;
}

input:not(:valid)+label:not(label[for="accept"]) {
  font-size: 0.75rem;
  color: #c4c4c4;
  top: 20px;
  left: 15px;
  transition: all 0.5s;
}

input:focus+label:not(label[for="accept"]) {
  top: 8px;
  font-size: 0.625rem;
  transition: all 0.5s;
}

input:valid+label:not(label[for="accept"]) {
  top: 8px;
  font-size: 0.625rem;
  transition: all 0.5s;
}

.my-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #222222;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.my-checkbox:checked {
  width: 19px;
  height: 19px;
  background-color: #222222;
  border: 3px solid #ffffff;
  box-shadow: 0 0 0 1px #222222;
  border-radius: 2px;
}
</style>
