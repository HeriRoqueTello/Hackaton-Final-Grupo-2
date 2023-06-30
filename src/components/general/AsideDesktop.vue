<template>
  <div class="flex flex-col justify-between bg-primary px-20 py-6 h-screen">
    <RouterLink class="self-start" to="/">
      <img class="h-[34px]" src="/Logo.svg" alt="Logo">
    </RouterLink>
    <div class="self-end flex flex-col items-end text-white text-right">
      <h2 class="text-2xl w-[30rem] lg:text-4xl font-bold leading-tight mb-8">¡Explota todo tu potencial tecnológico!</h2>
      <p class="text-lg w-52">Con nuestros programas de especialización</p>
    </div>
    <div class="self-start flex gap-4 mt-4 flex-col">
      <p class="text-sm font-semibold text-white">Con el respaldo de:</p>
      <div class="flex flex-row gap-4">
        <img class="h-5 " src="/Intercorp_logo.svg" alt="Intercorp logo">
        <img class="h-10" src="/Idat_logo.svg" alt="Idat logo">
        <img class="h-8" src="/Zegel_logo.png" alt="Zegel logo">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  
</style>