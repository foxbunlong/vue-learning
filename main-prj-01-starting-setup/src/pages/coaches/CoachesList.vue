<template>
  <div>
    <!-- !! will change to true as it's not blank -->
    <base-dialog :show="!!error" title="Error" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <CoachFilter @change-filter="setFilters" />
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="handleRefresh"
            >Refresh</base-button
          >
          <base-button v-if="!isAuthenticated" link to="/auth?redirect=register"
            >Login to register as Coach</base-button
          >
          <base-button
            v-if="isAuthenticated && !isCoach && !isLoading"
            link
            to="/register"
          >
            Register as Coach
          </base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoach">
          <CoachItem
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :item="coach"
          />
        </ul>
        <h3 v-else>Not found</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach']; // Get from /store/modules/coaches/getters.js
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      console.log('activeFilters', this.activeFilters);
      console.log('coaches', coaches);
      return coaches.filter((item) => {
        if (this.activeFilters.frontend && item.areas.includes('frontend')) {
          return true;
        }

        if (this.activeFilters.backend && item.areas.includes('backend')) {
          return true;
        }

        if (this.activeFilters.career && item.areas.includes('career')) {
          return true;
        }

        return false;
      });
    },
    hasCoach() {
      return !this.isLoading && this.$store.getters['coaches/hasCoach'];
    },
  },
  components: { CoachItem, CoachFilter },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      console.log('updatedFilters', updatedFilters);
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(forceRefresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', { forceRefresh });
      } catch (error) {
        console.log('error', error);
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    handleRefresh() {
      this.loadCoaches(true);
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
