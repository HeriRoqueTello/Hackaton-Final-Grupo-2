<template>
    <div class="relative">
      <div class="phone-image"></div>
      <div class="form-container">
        <h2 class="text-[#000425] text-base font-semibold w-1/2">Postula y obtén un 10% de descuento en el programa</h2>
        <input type="text" pattern="[a-Z]" required class="py-3 rounded-md my-2 border-[#8b9099] border px-1" placeholder="Nombre">
        <input type="tel" pattern="[0-9]{9}" required class="py-3 rounded-md my-2 border-[#8b9099] border px-1" placeholder="Celular">
        <input type="email" required class="py-3 rounded-md border-[#8b9099] my-2 border px-1" placeholder="Correo electrónico">
        <input type="text" pattern="[a-Z]" class="py-3 rounded-md my-2 border-[#8b9099] border px-1" placeholder="Programa">
        <span for="" class="w-2/3">         
            <p class=" mb-10 text-xs"><input type="checkbox" class="border-[#000425] border-5"> Acepto las Politicas de privacidad.</p>
        </span>
        <button type="submit" class="text-white bg-[#5640FF] rounded font-bold py-3 px-12 text-sm w">
          Quiero Postular
        </button> 
      </div>
    </div>
  </template>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');


.relative {
  position: relative;
}

.phone-image {
  background-image: url('/./src/assets/mobile.png');
  background-repeat: no-repeat;
  background-position: right;
  position: fixed;
  z-index: 5;
  top: 50%;
  right: 170px;
  transform: translate(0, -50%);
  width: 350px;
  height: 600px;
}

.form-container {
  position: fixed;
  top: 50%;
  right: 50px; 
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;
}
</style>
