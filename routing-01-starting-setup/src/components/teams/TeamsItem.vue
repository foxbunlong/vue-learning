<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <router-link :to="urlLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    urlLink() {
      // return '/teams/' + this.id + '?sort=asc';
      return {
        // path: '/teams/' + this.id,
        name: 'team-members',
        params: { teamId: this.id },
        query: {
          sort: 'asc', // Example: http://192.168.50.28:8080/teams/t1?sort=asc
        },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
