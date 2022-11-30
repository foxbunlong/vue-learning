import { createStore } from 'vuex';

import coachesModule from './modules/coaches';

const store = createStore({
  modules: { coaches: coachesModule },
  state() {
    return {
      userId: new Date().toISOString(),
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
