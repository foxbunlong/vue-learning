<template>
  <div>
    <form @submit.prevent="updateData">
      <label>Username:</label>
      <input type="text" v-model="username" />
      <label>Age:</label>
      <input type="text" v-model="age" />
      <button>Update</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["update-data"],
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    updateData() {
      this.$emit("update-data", { username: this.username, age: +this.age }); // + fix the data type error prompt
    },
  },
};
</script>
