import { createStore } from 'vuex';

import rootActions from './actions';
import counterModule from './counter';
import rootGetters from './getters';
import rootMutations from './mutations';

export default createStore({
  modules: {
    counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
