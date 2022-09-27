<template>
  <button @click="add(1)">Add</button>
</template>

<script>
export default {
  methods: {
    add(num) {
      this.$store.state.counter += num;
    },
  },
};
</script>
