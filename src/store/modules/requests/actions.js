export default {
  async contactCoach(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://coach-254ee-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();
    newRequest.coachId = payload.coachId; //after we send a request, we ll have it in the local data (not on the server).

    // For the post request Firebase will return the generated ID. To extract this data.
    newRequest.id = responseData.name; //add new id property to newRequest

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }

    context.commit('addRequest', newRequest);
  },
  async loadRequests(context) {
    const coachId = context.rootGetters.userId;

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://coach-254ee-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` +
        token
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests'
      );
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        email: responseData[key].email,
        message: responseData[key].message,
        coachId: coachId,
        id: key,
      };
      requests.push(request);
    }
    console.log(requests);
    context.commit('setRequests', requests);
  },
};
