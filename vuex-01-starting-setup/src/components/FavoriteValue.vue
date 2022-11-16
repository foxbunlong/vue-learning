<template>
  <h3>{{ counter }}</h3>
  <p>Do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['counterModule/normalizedCounter'];
    },
  },
};
</script>
