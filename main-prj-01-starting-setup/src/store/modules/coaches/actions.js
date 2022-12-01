export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId; // Get from /store/index.js
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const resp = await fetch(
      `https://vue-demo-46c9e-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    if (!resp.ok) {
      console.log(resp.text);
    }

    const data = await resp.json();
    console.log('data', data);

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shoudFetch) {
      return;
    }

    const resp = await fetch(
      `https://vue-demo-46c9e-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
    );

    if (!resp.ok) {
      console.log(resp);
      const error = new Error(resp.statusText || 'Failed to fetch!');
      throw error;
    }

    const data = await resp.json();
    const coaches = [];

    for (const key in data) {
      const coach = {
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        description: data[key].description,
        hourlyRate: data[key].hourlyRate,
        areas: data[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};
