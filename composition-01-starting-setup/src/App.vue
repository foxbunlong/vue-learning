<template>
  <section class="container">
    <UserData :firstName="firstName" :lastName="lastName" :age="user.age" />

    <h2>{{ user.userName }}</h2>
    <h3>{{ user.age }}</h3>

    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>

    <button @click="setNewData">Change age</button>
    <div>
      <h2>{{ fullName }}</h2>
      <!-- 2-way binding is working with ref -->
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" ref="lastNameInput" />
      <button @click="changeLastName">Change last name</button>
    </div>
  </section>
</template>

<script setup>
// To check object is reactive or not, import {isRef, isReactive}
import { reactive, toRefs, ref, computed, watch } from 'vue'; // reactive can only work with object
import UserData from './components/UserData.vue';

// Entire object is reactive but value inside it is not reactive
const user = reactive({
  userName: 'Long Thay',
  age: 34,
});

// toRefs turns username and age to reactive
const userRefs = toRefs(user);
const userName = userRefs.userName; // Now reactive
const age = userRefs.age; // Now reactive

const setNewData = () => {
  user.userName = 'After changed'; // Reactive value can only be set by using .value
  user.age = 30;
};

// Computed properties > Computed function
const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);

// Computed ref is readonly
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

// Can watch single var or multible var
// watch(age, (newVal, oldVal) => {
//   console.log(oldVal, ' => ', newVal);
// });

watch([age, fullName], (newVals, oldVals) => {
  console.log(oldVals, ' => ', newVals);
});

const changeLastName = () => {
  console.log(lastNameInput);
  lastName.value = lastNameInput.value.value;
};
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
