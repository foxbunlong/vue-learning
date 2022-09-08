const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // $refs provided by Vue to access dom element
      console.dir(this.$refs.userText);
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount("#app");
