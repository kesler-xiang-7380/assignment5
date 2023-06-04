import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    movies: [],
    cart: [],
  }),
  actions: {
    addToCart(poster_path, title) {
      this.cart.push({
        poster_path,
        title,
      });
      console.log(this.cart);
    }
  }
})