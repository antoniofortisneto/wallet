// Coloque aqui suas actions
import apiCurrency from '../helper/ApiService';

export const LOGIN = 'LOGIN';
export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export const USER = 'USER';
export const wallet = (payload) => ({
  type: USER,
  payload,
});

export const FETCH = 'FETCH';
export const Fetch = (payload) => ({
  type: FETCH,
  payload,
});

export const getCurrency = (currency) => async (dispatch) => {
  await apiCurrency(currency).then((response) => dispatch(Fetch(response)));
};
