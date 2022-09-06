const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      age: 0,
    };
  },
  // Computed will aware of change of dependency (e.g. name)
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Thay";
    },
  },
  // Any method implemented in UI components will be re-called each time UI updated. To prevent it, use computed properties
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setAge(event, suffix) {
      this.age = event.target.value + suffix;
    },
    submitForm(event) {
      // Prevent reload whole page
      // event.preventDefault();
      alert("Submited");
    },
  },
});

app.mount("#events");
