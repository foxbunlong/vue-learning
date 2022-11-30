import MD5 from 'crypto-js/md5';
import { createStore } from 'vuex';

import coachesModule from './modules/coaches';
import requestsModule from './modules/requests';

const store = createStore({
  modules: { coaches: coachesModule, requests: requestsModule },
  state() {
    return {
      userId: MD5(new Date().toISOString()),
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
