Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      console.log(this.goals);

      this.enteredValue = "";
    },
  },
}).mount("#app");
