import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      console.log(payload);
      // VueX automatically take current state
      // payload can be anything (e.g. string, number, object)
      state.counter += payload.value;
    },
  },
  actions: {
    // Action allow asynchronous process
    // Working directly with context featured by VueX
    increment(context) {
      console.log('increment');
      setTimeout(() => {
        context.commit('increment', { value: 1 });
      }, 2000);
    },
    increase(context, payload) {
      console.log('increase');
      context.commit('increment', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 5;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: [counterModule],
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
