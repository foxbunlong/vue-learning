<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <TheCounter />
    <button @click="add(1)">Add</button>
    <ChangeCounter />
    <FavoriteValue />
  </base-container>
  <base-container title="Auth"><UserAuth /></base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    add(num) {
      // this.$store.state.counter += num;

      // this.$store.commit('increment', num);

      // this.$store.commit({
      //   type: 'increment',
      //   value: num,
      // });

      this.$store.dispatch({
        type: 'increase',
        value: num,
      });
    },
  },
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
</style>
