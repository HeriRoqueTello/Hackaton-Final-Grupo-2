import { defineStore } from 'pinia';
import axios from 'axios';

export const useRegisterStore = defineStore({
  id: 'register',
  state: () => ({
    apiURL: 'https://pachatube-db.onrender.com',
    endpoint: '/usuarios'
  }),
  actions: {
    async onSubmit(newUser) {
      await axios.post(`${this.apiURL}${this.endpoint}`, newUser)
        .then(() => {
          window.location = '/login';
        })
        .catch(error => {
          console.error('Error en el registro:', error);
        });
    }
  }
});
