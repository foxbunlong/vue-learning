<template>
  <h1>Assignment</h1>
  <active-user :username="userData.username" :age="userData.age"></active-user>
  <user-data @update-data="updateData"></user-data>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
export default {
  data() {
    return { userData: {} };
  },
  components: { ActiveUser },
  methods: {
    updateData(data) {
      console.log(data);
      this.userData = data;
    },
  },
};
</script>
