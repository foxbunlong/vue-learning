export default {
  login() {},
  async signup(context, payload) {
    const resp = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2IAy0RcclrhxX-uE0vUufEOaClFv7orE',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    console.log(resp);

    if (!resp.ok) {
      const error = new Error(resp.statusText || 'Failed to signup');
      throw error;
    }

    const data = await resp.json();
    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },
};
