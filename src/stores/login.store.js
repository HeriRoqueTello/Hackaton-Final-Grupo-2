import { defineStore } from 'pinia';
import axios from 'axios';

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
        const { data } = await axios.get(`${this.apiURL}${this.endpoint}`, {
          params: {
            email,
            password
          }
        });     
        if(data.length > 1){
          return "Datos ingresados incorrectos"
        } else {
          this.user = data;
          this.$route.push('/home');
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