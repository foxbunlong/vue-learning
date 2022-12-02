export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
    state.onAutoLogout = false;
  },
  logoutEvent(state) {
    state.onAutoLogout = true;
  },
};
