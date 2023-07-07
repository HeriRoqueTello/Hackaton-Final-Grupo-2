import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    usuario: null
  }),
  actions: {
    setLocalStore(value) {
      localStorage.setItem('usuario', value)
    },
    getLocalStore(){
      return localStorage.getItem('usuario')
    }
  }
});
