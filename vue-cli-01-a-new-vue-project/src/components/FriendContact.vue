<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="showHideDetails">
      {{ detailsShowed ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsShowed">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsShowed: false,
      friend: {
        id: 1,
        name: "Long Thay",
        phone: "0988997071",
        email: "test@yahoo.com",
      },
    };
  },
  methods: {
    showHideDetails() {
      this.detailsShowed = !this.detailsShowed;
    },
  },
};
</script>
