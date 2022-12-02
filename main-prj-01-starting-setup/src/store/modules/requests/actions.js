export default {
  async contactCoach(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
    };

    const resp = await fetch(
      `https://vue-demo-46c9e-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    if (!resp.ok) {
      const error = new Error(
        resp.statusText || 'Something wrong when create new request'
      );
      throw error;
    }

    const data = await resp.json();
    newRequest.id = data.name; // name field is inside the response created by Firebase
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    // const coachId = context.rootGetters.userId;
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const resp = await fetch(
      `https://vue-demo-46c9e-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`
    );
    if (!resp.ok) {
      const error = new Error(
        resp.statusText || 'Something wrong when create new request'
      );
      throw error;
    }

    const requests = [];

    const data = await resp.json();
    for (const key in data) {
      const request = {
        id: key,
        coachId: coachId,
        email: data[key].email,
        message: data[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};
