export default {
  requests(state) {
    //, _, _2, rootGetters
    // const coachId = rootGetters.userId;
    const coachId = 'd3c5acb06d1763d1fa46c80e1c2f8bc9';
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state) {
    // _, _2, rootGetters
    // const coachId = rootGetters.userId;
    const coachId = 'd3c5acb06d1763d1fa46c80e1c2f8bc9';
    const filteredRequests = state.requests.filter(
      (req) => req.coachId === coachId
    );
    console.log('filteredRequests', filteredRequests);
    return filteredRequests && filteredRequests.length > 0;
  },
};
