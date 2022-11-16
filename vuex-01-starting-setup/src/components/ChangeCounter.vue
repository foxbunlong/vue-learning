<template>
  <button @click="increment">Add</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // add(num) {
    // 1st args = name of mutation wanna perform
    // this.$store.commit('increment', { value: num });
    // this.$store.dispatch('increment', { value: num });
    // },

    // ...mapActions(['increment', 'increase']), // emerge with actions
    ...mapActions('counterModule', {
      increment: 'increment',
      increase: 'increase',
    }), // emerge with actions
  },
};
</script>
