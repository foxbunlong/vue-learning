<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ item.hourlyRate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in item.areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailLink">Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    fullName() {
      return this.item.firstName + ' ' + this.item.lastName;
    },
    coachContactLink() {
      return `${this.$route.path}/${this.item.id}/contact`;
    },
    coachDetailLink() {
      return `${this.$route.path}/${this.item.id}`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
