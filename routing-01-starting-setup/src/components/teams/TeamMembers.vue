<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    /**
    loadTeamMembers(route) {
      // $route provided by vue to access to route information
      // this.$route.path = /teams/t1
      const teamId = route.params.teamId;
      const selectedTeam = this.teams.find((e) => e.id === teamId);
      const selectedMembers = [];
      for (const member of selectedTeam.members) {
        const selectedUser = this.users.find((e) => e.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
     */
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find((e) => e.id === teamId);
      const selectedMembers = [];
      for (const member of selectedTeam.members) {
        const selectedUser = this.users.find((e) => e.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // this.loadTeamMembers(this.$route);
    this.loadTeamMembers(this.teamId);
    console.log('query', this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    // Called before this component is reused with new data
    console.log('Team members Cmp beforeRouteUpdate');
    console.log(to, from);
    // this.loadTeamMembers(to.params.teamId); // Alternative for watch teamId below
    next();
  },
  watch: {
    // $route(newRoute) {
    //   this.loadTeamMembers(newRoute);
    // },
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
