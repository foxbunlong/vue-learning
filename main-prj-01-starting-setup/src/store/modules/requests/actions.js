export default {
  contactCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const newRequest = {
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };

    fetch(
      `https://vue-demo-46c9e-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(newRequest),
      }
    );

    context.commit('addRequest', newRequest);
  },
};
