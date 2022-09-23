<template>
  <!-- Applied for multible items. Good for list -->
  <!-- tag can be any kind of html element -->
  <transition-group tag="ul" name="anim-user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" v-model="enteredUser" />
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Long', 'AAAAAA', 'BBBBBB'],
      enteredUser: '',
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.enteredUser);
      this.enteredUser = '';
    },
    removeUser(user) {
      this.users = this.users.filter((e) => e !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.anim-user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.anim-user-list-enter-active {
  transition: all 0.3s ease-out;
}

.anim-user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.anim-user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.anim-user-list-leave-active {
  transition: all 0.3s ease-in;
  /* Support for snap animation */
  position: absolute;
}

.anim-user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Applied for items which is not added or removed */
.anim-user-list-move {
  transition: transform 0.8s ease;
}
</style>
