<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div class="cart-container">
    <div v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
.cart-container{
  background-color: aquamarine;
  font-family: 'comic neue', 'space mono', monospace;
}
</style>