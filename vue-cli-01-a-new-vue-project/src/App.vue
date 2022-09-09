<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Long Thay",
          phone: "0988997071",
          email: "test@yahoo.com",
        },
        {
          id: 2,
          name: "Hoang Phu",
          phone: "0888687951",
          email: "qwerty@yahoo.com",
        },
      ],
    };
  },
};
</script>
