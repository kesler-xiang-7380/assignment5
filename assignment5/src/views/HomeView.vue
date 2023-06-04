<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import axios from 'axios';
import { useStore } from "../store/index.js";

const store = useStore();
const movies = (
  await axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: "f5fc46e0e9d2c42522efbf294b903f7b",
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;

store.movies = movies.results.map((movie) => {
  return {
    id: movie.id,
    poster: movie.poster_path,
  }
});
console.log(movies.poster_path);
</script>

<template>
  <div>
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<style scoped></style>