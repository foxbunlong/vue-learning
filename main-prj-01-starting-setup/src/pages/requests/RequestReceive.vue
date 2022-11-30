<template>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
      </header>
      <ul v-if="hasRequests">
        <RequestItem
          v-for="request in receivedRequests"
          :email="request.email"
          :message="request.message"
          :key="request.id"
        />
      </ul>
      <h3 v-else>You haven't received any requests yet</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  components: { RequestItem },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
