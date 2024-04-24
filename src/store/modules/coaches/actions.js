export default {
  //async key word before the function
  async registerCoach(context, formData) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      description: formData.description,
      hourlyRate: formData.rate,
      areas: formData.areas,
    };

    const token = context.rootGetters.token;

    //await key word in front of our promise. Store result in a regular variable. It will be stored only fetch is done.
    const response = await fetch(
      `https://coach-254ee-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT', // data will be overwritten if it existed or will be created if it didn't exist yet.
        body: JSON.stringify(coachData),
      }
    );

    //the next line will be execute when previous request is done.
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to register Coach'
      );
      throw error;
    }

    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getter.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://coach-254ee-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    //to make an array from responseData object
    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};
