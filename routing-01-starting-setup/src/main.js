import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamList },
    { path: '/users', component: UsersList },
  ],
  // When set linkActiveClass: 'active' need to change in TheNavigation.vue
});

const app = createApp(App);

// use - Connect with 3rd party package
app.use(router);

app.mount('#app');
