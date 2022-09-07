const app = Vue.createApp({
  data() {
    return {
      selectedStyle: "",
      isShowed: true,
      backgroundColor: "#fff",
    };
  },
  computed: {
    styleBox() {
      return {
        user1: this.selectedStyle === "user1",
        user2: this.selectedStyle === "user2",
        visible: this.isShowed,
        hidden: !this.isShowed,
      };
    },
  },
  methods: {
    setVisibled() {
      this.isShowed = !this.isShowed;
    },
  },
});

app.mount("#assignment");
