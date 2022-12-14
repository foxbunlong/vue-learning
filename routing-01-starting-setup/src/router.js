import { createRouter, createWebHistory } from 'vue-router';

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
      meta: { needsAuth: true }, // any kind of value or object
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
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
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
  console.log('Global beforeEach');
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log('Need Auth!!!');
  }

  next(); // next(false); - prevent to load page
  // next('/route'); // next({name: 'team-members', params: {teamId: 't2'}})
});

router.afterEach((to, from) => {
  // Called after each navigation completed
  // Nice to sending analytics to server
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
