export default {
  async contactTutor(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(
      `https://find-a-tutor-ec1a9-default-rtdb.firebaseio.com/requests/${payload.tutorId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.tutorId = payload.tutorId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const tutorId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://find-a-tutor-ec1a9-default-rtdb.firebaseio.com/requests/${tutorId}.json?auth=${token}`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch request.'
      );
      throw error;
    }
    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        tutorId: tutorId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};
