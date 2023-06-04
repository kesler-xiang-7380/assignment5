<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase")
  } else {
    alert("Invalid username/password!")
  }
}
</script>

<template>
  <form class="login-container" @submit.prevent="login()">
    <input type="text" placeholder="username" v-model="username" />
    <input type="password" placeholder="password" v-model="password" />
    <input type="submit" value="Login" />
  </form>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
.login-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  font-family: 'comic neue', 'space mono', monospace;
}
</style>