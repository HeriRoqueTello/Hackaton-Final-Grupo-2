<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Continuar</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
const url = 'http://localhost:5173';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1NQIEzF6ZEDyl9rhQlcKrn9I', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: 'price_1NQINGF6ZEDyl9rhBB4kbWBk', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: `${url}/pago/aceptado`,
      cancelURL: `${url}/pago/cancelado`,
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>