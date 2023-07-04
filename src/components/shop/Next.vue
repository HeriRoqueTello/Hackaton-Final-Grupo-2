<template>
    <div class="container-next py-12 px-10 shadow-xl mx-auto mt-12 lg:mt-0 lg:self-start">
        <div class="grid grid-cols-6 gap-4">
            <h2 class="text-[#5640FF] col-start-1 col-end-3 text-left subtotal m">Subtotal</h2>
            <label for="" class="col-end-7 col-span-2 text-right subtotal">S/ 600.00</label>
        </div>
        <div
            class="row w-full border-solid border-[1px] border-[#C4C4C4] rounded-[5px] flex justify-between items-center px-4 mt-6">
            <input type="text" placeholder="Agrega un código de descuento" class="descuento">
            <button class="flex items-center">
                <SendIconVue />
            </button>
        </div>
        <button class="bg-[#5640ff] rounded-xl text-white text-center next py-4 mt-9">Continuar</button>
    </div>
</template>
<script>
import SendIconVue from '../Icons/SendIcon.vue';

export default {
    components: {
        SendIconVue
    },

    data() {
        return {

        }
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.container-next {
    width: 100%;
    max-width: 433px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subtotal {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #5640FF;
}

.descuento {
    border-radius: 5px;
    width: 100%;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    outline: none;
}

.next {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    width: 80%;
}
</style>