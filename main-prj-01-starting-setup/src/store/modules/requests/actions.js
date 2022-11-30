export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newRequest);
  },
};
