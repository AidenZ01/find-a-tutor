export default {
  requests(state, _, _2, rootGetters) {
    const tutorId = rootGetters.userId;
    return state.requests.filter(req => req.tutorId === tutorId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};
