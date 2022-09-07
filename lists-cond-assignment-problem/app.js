const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      isShowed: true,
    };
  },
  // Added for compute the ui
  computed: {
    buttonText() {
      return this.isShowed ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      if (this.enteredTask !== "") {
        this.tasks.push(this.enteredTask);
        this.enteredTask = "";
      }
    },
    showHideList() {
      this.isShowed = !this.isShowed;
    },
  },
});

app.mount("#assignment");
