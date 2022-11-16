<template>
  <!-- Change from counter to finalCounter because it's computed property name -->
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter']), // emerge with computed
  },
};
</script>
