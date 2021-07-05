export default {
  tutors(state) {
    return state.tutors;
  },
  hasTutors(state) {
    return state.tutors && state.tutors.length > 0;
  },
  isTutor(_, getters, _2, rootGetters) {
    const tutors = getters.tutors;
    const userId = rootGetters.userId;
    return tutors.some(tutor => tutor.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};
