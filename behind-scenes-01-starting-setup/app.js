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
  beforeCreate() {
    // Vue app is not fully initallized
    // Could send http request, set timer
    console.log("Before create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    // Right before we see something on the screen
    console.log("Before mount");
  },
  mounted() {
    // Templates and data are proceeded and showed on screen
    console.log("Mounted");
  },
  beforeUpdate() {
    // Right before we see change on the screen
    console.log("Before update");
  },
  updated() {
    // Data changes are proceeded and showed on the screen
    console.log("Updated");
  },
  beforeUnmount() {
    // Right before app.unmount called
    console.log("Before unmount");
  },
  unmounted() {
    // Successfully called app.unmount
    console.log("Unmounted");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount("#app");
}, 3000);
