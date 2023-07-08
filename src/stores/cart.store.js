import { defineStore } from 'pinia';
import { useCoursesStore } from '@/stores/courses.store.js';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    productos: localStorage.getItem('datos') ? JSON.parse(localStorage.getItem('datos')) : [],
  }),
  actions: {
    async addProduct(productId) {
      const data = await useCoursesStore().getDetalleCurso(productId);
      const product = {
        nombre: data.nombre,
        precio: data.precio,
        descripcion: data.descripcion,
        productoId: data.id,
        idstripe: data.idstripe,
        imagen: data.imagen,
        certificado: data.certificado,
        activo: data.activo,
        cantidad: 1
      }

      const productosEnLocalStorage = localStorage.getItem('productos');

      const productos = productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];

      const productoExistente = productos.find(function (producto) {
        return producto.idstripe === product.idstripe;
      });

      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        product.cantidad = 1;
        productos.push(product);
      }

      localStorage.setItem('productos', JSON.stringify(productos));
    }
  }
});
