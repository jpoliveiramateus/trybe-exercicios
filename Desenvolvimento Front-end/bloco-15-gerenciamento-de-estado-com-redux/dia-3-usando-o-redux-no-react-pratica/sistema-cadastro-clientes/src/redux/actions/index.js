export const LOGIN = 'LOGIN';

export const logIn = (login) => ({
  type: LOGIN,
  login,
});

export const REGISTER = 'REGISTER';

export const register = (info) => ({
  type: REGISTER,
  info,
});
