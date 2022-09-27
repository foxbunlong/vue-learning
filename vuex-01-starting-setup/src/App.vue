<template>
  <base-container title="Vuex">
    <TheCounter />
    <button @click="add(1)">Add</button>
    <ChangeCounter />
    <FavoriteValue />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },
  methods: {
    add(num) {
      // this.$store.state.counter += num;
      // this.$store.commit('increment', num);
      this.$store.commit({
        type: 'increment',
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
