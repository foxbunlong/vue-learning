<template>
  <button @click="navigateToTeams">Confirm</button>
  <button @click="save">Save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      isSaved: false,
    };
  },
  methods: {
    navigateToTeams() {
      // $router provided by vue-router
      this.$router.push('/teams');
      // this.$router.back();
      // this.$router.forward();
    },
    save() {
      this.isSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('User list comp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // Called before leave this page, can override back button
    // Ideal to execute save function
    console.log('User list comp beforeRouteLeave');
    console.log(to, from);
    if (this.isSaved) {
      next();
    } else {
      const userWannaLeave = confirm('Not saved yet! Please check again');
      next(userWannaLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
    // Called after Global afterEach
    // No way to cancel navigation
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
