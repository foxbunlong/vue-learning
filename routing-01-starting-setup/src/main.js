import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Page404 from './components/nav/Page404.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import TeamList from './components/teams/TeamsList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', component: TeamList }, // For this example, using TeamList as main page
    { path: '/', redirect: '/teams' }, // 1st load page will execute the rediction to team list
    // { path: '/teams', component: TeamList, alias: '/' }, // 1st load page will load the team
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // props: true - Dynamic params should be passed into component as props, not just $ route properties
      ],
    },
    // { path: '/teams/new', component: TeamList },
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },
    { path: '/:notFound(.*)', component: Page404 }, // Dynamic segment, come last in this routes array
  ],
  // When set linkActiveClass: 'active' need to change in TheNavigation.vue

  scrollBehavior(_, _2, savedPosition) {
    // scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  // Called everytime navigate from one page to another
  console.log(to, from);
  next(); // next(false); - prevent to load page
  // next('/route'); // next({name: 'team-members', params: {teamId: 't2'}})
});

const app = createApp(App);

// use - Connect with 3rd party package
app.use(router);

app.mount('#app');
