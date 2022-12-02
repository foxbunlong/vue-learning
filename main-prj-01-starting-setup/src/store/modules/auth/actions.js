let timer = null;

export default {
  async login(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'login' });
  },
  async signup(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'signup' });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2IAy0RcclrhxX-uE0vUufEOaClFv7orE';

    if (mode !== 'login') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2IAy0RcclrhxX-uE0vUufEOaClFv7orE';
    }

    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    if (!resp.ok) {
      const error = new Error(resp.statusText || 'Failed to signup');
      throw error;
    }

    const data = await resp.json();

    // Keep session on browser
    const expiresIn = +data.expiresIn * 1000;
    const expiredDate = new Date().getTime() + expiresIn; // in miliseconds
    localStorage.setItem('token', data.idToken);
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('tokenExpiration', expiredDate);

    // Clear after amount of seconds, if user stay on the page
    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: expiredDate,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      // Already expired
      context.dispatch('logout');
    } else {
      // Clear after amount of seconds, if user stay on the page
      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration,
      });
    }
  },
  logout(context) {
    localStorage.clear();
    clearTimeout(timer);
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('logoutEvent');
  },
};
