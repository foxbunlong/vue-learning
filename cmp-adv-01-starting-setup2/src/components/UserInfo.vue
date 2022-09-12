<template>
  <section>
    <base-card>
      <header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </header>
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
/* Scoped styles - Vue add generated attribute to selector */
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
