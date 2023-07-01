<template>
    <div class="container-next py-12 px-10 shadow-xl mx-auto right-aligned mr-28">
        <div class="grid grid-cols-6 gap-4">
            <h2 class="text-[#5640FF] col-start-1 col-end-3 text-left subtotal m">Subtotal</h2>
            <label for="" class="col-end-7 col-span-2 text-right subtotal">S/ 600.00</label>
        </div>
        <div class="row">
            <input type="text" placeholder="Agrega un código de descuento" class="descuento px-4 mt-6">
            <button class="flex self-end"><SendIconVue /></button>
        </div>        
        <button class="bg-[#5640ff] rounded-xl text-white text-center next py-4 mt-4">Continuar</button>
    </div>
</template>
<script>
import SendIconVue from '../Icons/SendIcon.vue';

export default {
    components:{
        SendIconVue
    },

    data(){
        return {

        }   
    },
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.container-next{
    max-width: 433px;
    max-height: 283px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subtotal{
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #5640FF;
}

.descuento {
    border-radius: 5px;
    width: 315px;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    border: 1px solid #C4C4C4;
    margin-bottom: 10px;
}

.next {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    width: 80%;
}

.right-aligned {
  /* Ajustar el posicionamiento a la derecha */
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

</style>