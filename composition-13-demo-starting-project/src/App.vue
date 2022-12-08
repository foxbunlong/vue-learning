<template>
  <main>
    <UserList :users="activeUsers" @list-projects="selectUser" />
    <ProjectsList :user="selectedUser" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import USER_DATA from './dummy-data.js';
import UserList from './components/users/UserList.vue';
import ProjectsList from './components/projects/ProjectsList.vue';

const selectedUser = ref(null);
const activeUsers = USER_DATA;

const selectUser = (uid) => {
  selectedUser.value = activeUsers.find((usr) => usr.id === uid);
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

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>
