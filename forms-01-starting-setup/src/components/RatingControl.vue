<template>
  <ul>
    <!-- Override default button behavior -->
    <li :class="{ active: modelValue === 'poor' }">
      <!-- :class="{ active: selectedTab === 'poor' }" -->
      <button type="button" @click="setSelectedTab('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="setSelectedTab('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="setSelectedTab('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // Special props created by Vue to use with v-model
  props: ['modelValue'],
  // Special emits created by Vue
  emits: ['update:modelValue'],
  //   data() {
  //     return {
  //       selectedTab: this.modelValue,
  //     };
  //   },
  computed: {
    selectedTab() {
      return this.modelValue; // Execute 2-way binding from TheForm to RatingControl
    },
  },
  methods: {
    setSelectedTab(tab) {
      //   this.selectedTab = tab;
      this.$emit('update:modelValue', tab);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: blue;
}

.active button {
  color: blue;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
