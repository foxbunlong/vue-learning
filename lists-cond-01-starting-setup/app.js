const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoal: "" };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal !== "") {
        this.goals.push(this.enteredGoal);
        this.enteredGoal = "";
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
