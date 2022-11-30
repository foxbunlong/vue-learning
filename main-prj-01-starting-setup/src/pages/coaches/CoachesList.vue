<template>
  <section>
    <CoachFilter @change-filter="setFilters" />
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">
          Register as Coach
        </base-button>
      </div>
      <ul v-if="hasCoach">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :item="coach"
        />
      </ul>
      <h3 v-else>Not found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
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
      return this.$store.getters['coaches/hasCoach'];
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
    loadCoaches() {
      this.$store.dispatch('coaches/loadCoaches');
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
