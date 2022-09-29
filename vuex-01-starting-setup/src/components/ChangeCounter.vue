<template>
  <button @click="add(1)">Add</button>
</template>

<script>
export default {
  methods: {
    add(num) {
      // 1st args = name of mutation wanna perform
      // this.$store.commit('increment', { value: num });

      this.$store.dispatch('increment', { value: num });
    },
  },
};
</script>
