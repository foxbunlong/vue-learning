<template>
  <!-- Slot used for html template code -->
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- Default slot will be used if no header slot is added in screen -->
        <h2>Default slot</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("slots = ", this.$slots);
  },
};
</script>

<style scoped>
/* Scoped styles - Vue add generated attribute to selector */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
