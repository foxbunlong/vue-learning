<template>
  <h2>Username: {{ username }}</h2>
  <h3>Age: {{ age }}</h3>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
  },
};
</script>
