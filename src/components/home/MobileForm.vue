<template>

  <div class="top-16 right-40 absolute z-50 text-[#000425] w-96 h-[40rem] bg-[url('../assets/mobile.png')] bg-no-repeat">
    <div class="relative">
      <div class="absolute top-20 -right-8 w-[87%]">
        <h2 class="text-base font-semibold w-2/3">Postula y obtén un 10% de descuento en el programa</h2>
        <input type="text" pattern="[a-Z]" required class="w-3/5 py-3 rounded-md my-2 border-[#8b9099] border px-1" placeholder="Nombre">
        <input type="tel" pattern="[0-9]{9}" required class="w-3/5 py-3 rounded-md my-2 border-[#8b9099] border px-1" placeholder="Celular">
        <input type="email" required class="w-3/5 py-3 rounded-md border-[#8b9099] my-2 border px-1" placeholder="Correo electrónico">
        <input type="text" pattern="[a-Z]" class="w-3/5 py-3 rounded-md my-2 border-[#8b9099] border px-1" placeholder="Programa">
        <span for="" class="w-2/3">         
            <p class="mb-10 text-xs"><input type="checkbox" class=""> Acepto las Politicas de privacidad.</p>
        </span>
        <button type="submit" class=" w-3/5 text-white bg-[#5640FF] rounded font-bold py-3 px-12 text-sm w">
          Quiero Postular
        </button> 
      </div>
    </div>
  </div>
  </template>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');


/* .relative {
  position: relative;
}

.phone-image {
  background-image: url('/./src/assets/mobile.png');
  background-repeat: no-repeat;
  background-position: right;
  z-index: 5;
  top: 50%;
  right: 170px;
  transform: translate(0, -50%);
  width: 350px;
  height: 600px;
}

.form-container {
  top: 50%;
  right: 50px; 
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;
} */
</style>
