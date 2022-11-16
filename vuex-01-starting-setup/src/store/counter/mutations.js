export default {
  increment(state, payload) {
    console.log(payload);
    // VueX automatically take current state
    // payload can be anything (e.g. string, number, object)
    state.counter += payload.value;
  },
};
