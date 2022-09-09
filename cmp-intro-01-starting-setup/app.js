const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Long Thay",
          phone: "0988997071",
          email: "abc@yahoo.com",
        },
        {
          id: 2,
          name: "Hoang Phu",
          phone: "0888687951",
          email: "def@yahoo.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template:
    /*html*/
    `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="showDetails">
            {{ detailsVisible ? 'Hide' : 'Show'}} Details
        </button>
        <ul v-if="detailsVisible">
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
        </ul>
    </li>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: 1,
        name: "Long Thay",
        phone: "0988997071",
        email: "abc@yahoo.com",
      },
    };
  },
  methods: {
    showDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
