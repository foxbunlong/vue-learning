import { createStore } from 'vuex';

import cartModule from './modules/cart';
import productModule from './modules/products';

const store = createStore({
  modules: { productModule, cartModule },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    doLogin(context) {
      context.commit('login');
    },
    doLogout(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
