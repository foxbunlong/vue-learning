<template>
  <!-- In Vue 2, it requires div to wrap all the components, but in Vue 3, we can remove the div tag - so called Fragment -->
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <!-- Built-in element to render component somewhere else in dom structure -->
    <teleport to="body">
      <ErrorAlert v-if="!inputIsValid">
        <h2>Input is invalid</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="closeDialog">OK</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsValid: true,
      goal: "",
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsValid = false;
      }
      this.$emit("set-goal", enteredValue);
    },
    closeDialog() {
      this.inputIsValid = true;
    },
  },
};
</script>
