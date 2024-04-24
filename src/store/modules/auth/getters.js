export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    //if we have a token
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
