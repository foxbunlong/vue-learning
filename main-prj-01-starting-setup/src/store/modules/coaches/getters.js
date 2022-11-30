export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoach(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    // state, getters, rootState, rootGetters
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId); // built in function if coaches full-filled some criterias (validating)
  },
};
