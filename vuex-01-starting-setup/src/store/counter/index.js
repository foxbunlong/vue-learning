import counterActions from './actions';
import counterGetters from './getters';
import counterMutations from './mutations';

export default {
  namespaced: true, // Entire module should be detached from the rest of the store
  // state is acting locally to current module
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
