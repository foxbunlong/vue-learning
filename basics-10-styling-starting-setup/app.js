const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
    boxBClasses() {
      return { active: this.boxBSelected };
    },
    boxCClasses() {
      return { active: this.boxCSelected };
    },
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
