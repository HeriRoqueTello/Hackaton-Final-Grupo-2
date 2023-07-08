<template>
    <div class="container-next py-12 px-10 shadow-xl mx-auto mt-12 lg:mt-0 lg:self-start">
        <div class="w-full flex flex-wrap justify-between items-center gap-4">
            <h2 class="text-[#5640FF] subtotal ">Subtotal</h2>
            <label for="" class="subtotal">S/ 600.00</label>
        </div>
        <div
            class="row w-full bg-[#F1F1F1] border-solid border-[1px] border-[#C4C4C4] rounded-[5px] flex justify-between items-center px-4 mt-6">
            <input type="text" placeholder="Agrega un código de descuento" class="descuento bg-[#F1F1F1]" disabled>
            <button class="flex items-center cursor-default">
                <SendIconVue />
            </button>
        </div>
        <p class="mt-[5px] text-xs text-center text-[#0083FF]">
            Los cupones de descuento estarán disponible próximamente
        </p>
        <StripeCheckout  class="bg-[#5640ff] rounded-xl text-white font-bold text-center next py-4 mt-9" />
    </div>
</template>
<script>
import SendIconVue from '../Icons/SendIcon.vue';
import StripeCheckout from './StripeCheckout.vue';

export default {
    components: {
        SendIconVue,
        StripeCheckout
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