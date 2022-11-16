<template>
  <button v-if="userIsAuthenticated" @click="logout">Logout</button>
  <button v-else @click="login">Login</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    // login() {
    //   this.$store.dispatch('login');
    // },
    // logout() {
    //   this.$store.dispatch('logout');
    // },
    ...mapActions({
      login: 'login',
      logout: 'logout',
    }),
  },
  computed: {
    // isAuth() {
    //   return this.$store.getters.userIsAuthenticated;
    // },
    ...mapGetters(['userIsAuthenticated']),
  },
};
</script>
