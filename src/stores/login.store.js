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
      async login(username, password) {
      try{
        const response = await this.axios.post(`${this.apiURL}${this.endpoint}`, { username, password });     
        this.user = response.data.user;
        router.push('/home');
      }catch(error) {
        console.error(error);
        throw new Error('Error al iniciar sesión');
      }
    },

    logout() {
      
      this.isAuthenticated = false;
      this.user = null;
      router.push('/login');
    },
  },
});