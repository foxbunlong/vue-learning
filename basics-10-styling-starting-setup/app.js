const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    selectA() {
      this.boxASelected = !this.boxASelected;
    },
    selectB() {
      this.boxBSelected = !this.boxBSelected;
    },
    selectC() {
      this.boxCSelected = !this.boxCSelected;
    },
  },
});

app.mount("#styling");
