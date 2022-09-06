const app = Vue.createApp({
  data() {
    return {
      courseGoal: "AAAAAAAA",
      courseGoal2: "BBBBBBBB",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal;
      } else {
        return this.courseGoal2;
      }
    },
  },
});

app.mount("#user-goal");
