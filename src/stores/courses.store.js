import { defineStore } from 'pinia';
import axios from 'axios';

export const useCoursesStore = defineStore({
  id: 'courses',
  state: () => ({
    coursesHome: [],
  }),
  actions: {
    async getCoursesHome() {
      await axios.get('http://localhost:3000/cursos-home')
        .then(response => {
          this.coursesHome = response.data;
        })
        .catch(error => {
          console.error(`Se produjo un error al traer los cursos: ${error}`)
        })
    }
  }
});
