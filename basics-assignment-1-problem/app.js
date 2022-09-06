const app = Vue.createApp({
  data() {
    return {
      name: "Long Thay",
      age: 30,
      imageUrl:
        "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201810040211",
      textInputHint: "Hint text here",
    };
  },
  methods: {
    agePlus5() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
