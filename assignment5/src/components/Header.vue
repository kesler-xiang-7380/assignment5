<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="header-container">
    <h1>Dave's Movie website (Not sketchy).</h1>
    <button @click="router.push('/login')">Login</button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
.header-container {
  background-color: limegreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'comic neue', 'space mono', monospace;
}

button {
  width: 150px;
  height: 50px;
  color: aquamarine;
}
</style>