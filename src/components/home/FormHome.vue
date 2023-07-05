<template>

    <div class="flex flex-col p-4 mb-10">
        <h2 class="text-[#000425] text-base font-semibold Poppins">Postula y obtén un 10% de descuento en el programa</h2>
        <input type="text" pattern="[a-Z]" required class="px-2 py-3 rounded-md my-2 border-[#8b9099] border Roboto" placeholder="Nombre">
        <input type="tel" pattern="[0-9]{9}" required class="px-2 py-3 rounded-md my-2 border-[#8b9099] border Roboto" placeholder="Celular">
        <input type="email" required class="px-2 py-3 rounded-md border-[#8b9099] my-2 border Roboto" placeholder="Correo electrónico">
        <input type="text" pattern="[a-Z]" class="px-2 py-3 rounded-md my-2 border-[#8b9099] border Roboto" placeholder="Programa">
        <br/>
        
        <label for="accept" class="mb-3 Roboto"><input id="accept" type="checkbox" class="border-[#000425] border"> Acepto las Politicas de privacidad.</label>
        <button type="submit" class="text-white bg-[#5640FF] rounded font-bold py-3 px-12 text-sm w Poppins">
            Quiero Postular
        </button> 
    </div>

</template>

<script>

</script>

<style>

</style>