const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      age: 0,
      nameAndAge: "",
    };
  },
  // Watch will aware of change of one dependency only. Function name should be matched with data
  // Best for http request when data changed or behind the scene work needed to do
  watch: {
    name(value) {
      if (value === "") {
        this.nameAndAge = "";
      } else {
        this.nameAndAge = value + " " + this.age;
      }
    },
  },
  // Computed will aware of change of all dependencies (e.g. name)
  // This is more preferable and less code with many dependencies
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
