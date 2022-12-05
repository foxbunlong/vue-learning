<template>
  <section class="container">
    <h2>{{ user.userName }}</h2>
    <h3>{{ user.age }}</h3>

    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script setup>
// To check object is reactive or not, import {isRef, isReactive}
import { reactive, toRefs } from 'vue'; // reactive can only work with object

// Entire object is reactive but value inside it is not reactive
const user = reactive({
  userName: 'Long Thay',
  age: 34,
});

// toRefs turns username and age to reactive
const userRefs = toRefs(user);
const userName = userRefs.userName; // Now reactive
const age = userRefs.age; // Now reactive

setTimeout(() => {
  user.userName = 'After timeout'; // Reactive value can only be set by using .value
  user.age = 30;
}, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
