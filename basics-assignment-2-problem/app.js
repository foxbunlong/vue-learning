const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    showAlert() {
      alert("AAAAAA");
    },
    updateOutput(event) {
      this.output1 = event.target.value;
    },
    updateOutput2(event) {
      this.output2 = event.target.value;
    },
  },
});

app.mount("#assignment");
