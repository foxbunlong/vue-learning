const app = Vue.createApp({
  data() {
    return {
      output: 0,
    };
  },
  watch: {
    resultOutput() {
      setTimeout(() => {
        this.output = 0;
      }, 5000);
    },
  },
  computed: {
    resultOutput() {
      if (this.output <= 37) {
        return "Not there yet";
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(value) {
      this.output += value;
    },
  },
});

app.mount("#assignment");
