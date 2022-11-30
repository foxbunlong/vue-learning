export default {
  registerCoach(context, payload) {
    const coachData = {
      id: context.rootGetters.userId, // Get from /store/index.js
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    context.commit('registerCoach', coachData);
  },
};
