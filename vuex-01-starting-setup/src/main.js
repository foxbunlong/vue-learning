import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
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
});

const app = createApp(App);
app.use(store);

app.mount('#app');
