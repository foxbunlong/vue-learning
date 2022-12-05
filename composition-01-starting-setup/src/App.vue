<template>
  <section class="container">
    <h2>{{ user.userName }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// const userName = ref('Long Thay'); // Reactive value
// const age = ref(34);
const user = ref({
  userName: 'Long Thay',
  age: 34,
});

setTimeout(() => {
  // userName.value = 'After timeout'; // Reactive value can only be set by using .value
  // age.value = 30;
  user.value.userName = 'After timeout'; // Reactive value can only be set by using .value
  user.value.age = 30;
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
