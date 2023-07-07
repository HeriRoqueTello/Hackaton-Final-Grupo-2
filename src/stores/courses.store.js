import { defineStore } from 'pinia';
import axios from 'axios';

export const useCoursesStore = defineStore({
  id: 'courses',
  state: () => ({
    apiURL: 'https://pachatube-db.onrender.com',
    endpoint: '/cursos'
  }),
  actions: {
    async getCursos() {
      const { data } = await axios.get(`${this.apiURL}${this.endpoint}`)
      return data
    },
    async getDetalleCurso(id){
      const { data } = await axios.get(`${this.apiURL}${this.endpoint}/${id}`)
      return data
    }
  }
});
