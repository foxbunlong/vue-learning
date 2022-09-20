<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else-if="!isLoading && results && results.length">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else>No data found</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      isLoading: false,
      results: [],
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      fetch(
        'https://vue-demo-46c9e-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          const results = [];
          // Loop through all objects in data
          for (const id in data) {
            results.push({
              id,
              name: data[id].userName,
              rating: data[id].rating,
            });
          }
          this.results = results;
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
