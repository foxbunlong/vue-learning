const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      age: 0,
    };
  },
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
