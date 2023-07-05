<template>
  <section class="relative h-screen overflow-auto px-[20px] grid grid-cols-[100%] grid-rows-[60px_auto]">
    <div class="w-full self-start flex justify-around pt-[20px] border-b-[1px] border-solid border-[#f8f8fa]">
      <RouterLink class="w-[50%] flex justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.16)]" to="/login">
        <button>
          <h4 class="text-[#000425] pb-[15px] text-sm font-bold min-[1366px]:text-[#222222] Poppins">
            Iniciar Sesión
          </h4>
        </button>
      </RouterLink>
      <button
        class="w-[50%] flex justify-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.16)] border-b-[5px] border-solid border-[#000425] min-[1366px]:border-[#222222]">
        <h4 class="text-[#000425] text-sm font-bold pb-[15px] min-[1366px]:text-[#222222] Poppins">
          Registrarse
        </h4>
      </button>
    </div>

    <div class="w-full self-center">
      <div class="mt-[32px]">
        <p class="text-xs text-center text-[#222222] mb-[15px] Roboto">
          Puedes registrarte con:
        </p>
        <div class="w-full flex justify-center gap-x-[17px]">
          <button
            class="border-solid border-[1px] border-[#8b9099] rounded-[5px] hover:bg-secondary transition duration-300 ease-in-out">
            <img src="/icons/Facebook-icon.png" alt="Facebook Icon" class="px-[17px] py-[13px]">
          </button>
          <button
            class="border-solid border-[1px] border-[#8b9099] rounded-[5px] hover:bg-secondary transition duration-300 ease-in-out">
            <img src="/icons/LinkedIn-icon.png" alt="LinkedIn Icon" class="p-[13px]">
          </button>
        </div>
        <p class="text-xs text-center text-[#222222] mt-[25px] Roboto">
          También puedes registrarte con tu correo
        </p>
      </div>

      <form class="mt-[40px]">
        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] mb-[20px]">
          <input type="text" name="nameLastname" id="nameLastname"
            class="w-full text-xs font-bold text-[#222222] outline-0" autocomplete="off" required>
          <label for="nameLastname" class="Roboto">
            Nombres y apellidos
          </label>
        </div>
        <div
          class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] mb-[20px]">
          <input type="email" name="email" id="email" class="w-full text-xs font-bold text-[#222222] outline-0"
            autocomplete="off" required>
          <label for="email" class="Roboto">
            Correo electrónico
          </label>
        </div>
        <div class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] mb-[20px] flex justify-between items-center">
          <input type="password" name="password01" id="password01"
            class="w-full text-xs font-bold text-[#222222] outline-0" autocomplete="off" required
            v-model="valuePassword01">
          <label for="password01">Contraseña</label>
          <img class="w-[16px] h-[11px] cursor-pointer" src="/icons/show-icon.png" alt="Show Password Icon"
            @click="showPassword01 = true">
        </div>
        <div class="relative w-full border-solid border-[1px] border-[#8b9099] rounded-[5px] pt-[20px] px-[15px] pb-[16px] mb-[20px] flex justify-between items-center">
          <input type="password" name="password02" id="password02"
            class="w-full text-xs font-bold text-[#222222] outline-0" autocomplete="off" required
            v-model="valuePassword02">
          <label for="password02">
            Repite contraseña
          </label>
          <img class="w-[16px] h-[11px] cursor-pointer" src="/icons/show-icon.png" alt="Show Password Icon"
            @click="showPassword02 = true">
        </div>
        <div class="flex items-center">
          <input type="checkbox" name="accept" id="accept" class="my-checkbox" required><label for="accept"
            class="text-xs text-[#222222] ml-[10px]">Acepto <a class="font-bold underline">Términos y
              Condiciones</a></label>
        </div>
        <button class="mt-[30px] mb-[60px] bg-[#5640FF] w-full rounded-[10px] py-[18px] text-sm font-bold text-[#ffffff]">
          Registrarse
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showPassword01: false,
      showPassword02: false,
      valuePassword01: '',
      valuePassword02: ''
    };
  }
};
</script>

<style scoped>
label:not(label[for="accept"]) {
  font-size: 0.75rem;
  color: #c4c4c4;
  transition: all 0.3s;
  position: absolute;
  top: 20px;
  left: 15px;
}

input:not(:valid)+label:not(label[for="accept"]) {
  font-size: 0.75rem;
  color: #c4c4c4;
  top: 20px;
  left: 15px;
  transition: all 0.3s;
}

input:focus+label:not(label[for="accept"]) {
  top: 8px;
  font-size: 0.625rem;
  transition: all 0.3s;
}

input:valid+label:not(label[for="accept"]) {
  top: 8px;
  font-size: 0.625rem;
  transition: all 0.3s;
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
