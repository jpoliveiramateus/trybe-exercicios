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

export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const removeClient = (client) => ({
  type: REMOVE_CLIENT,
  client,
});

export const ORDER = 'ORDER';

export const orderName = () => ({
  type: ORDER,
});

export const NOT_ORDER = 'NOT_ORDER';

export const notOrder = () => ({
  type: NOT_ORDER,
});
