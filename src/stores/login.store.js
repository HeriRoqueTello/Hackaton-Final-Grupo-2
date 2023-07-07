import { defineStore } from 'pinia';
import axios from 'axios';
import { useGlobalStore } from '@/stores/global.store.js';

export const useLoginStore = defineStore('auth', {
  state: () => ({
      isAuthenticated: false,
      user: null,
      apiURL: 'https://pachatube-db.onrender.com',
      endpoint: '/usuarios'
    }),

  actions: {
    async login(email, password) {
      try{
        const { data } = await axios.get(`${this.apiURL}${this.endpoint}?email=${email}&password=${password}`);     
        if(data[0] === undefined ){
          return "Datos ingresados incorrectos"
        } else {
          this.user = data[0];
          console.log(this.user);
          return 'Logeado';
        }
      }catch(error) {
        console.error(error);
        throw new Error('Error al iniciar sesión');
      }
    },

    logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.$route.push('/home');
    },
  },
});