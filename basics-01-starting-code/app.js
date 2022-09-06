const app = Vue.createApp({
  data() {
    return {
      courseGoal: "<h1>AAAAAAAA</h1>",
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
