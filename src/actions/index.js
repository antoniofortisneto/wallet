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

export const DELETE = 'DELETE';
export const deleteButton = (id) => ({
  type: DELETE,
  id,
});

export const EDIT = 'EDIT';
export const editButton = (payload) => ({
  type: EDIT,
  payload,
});
export const getCurrency = (currency) => async (dispatch) => {
  await apiCurrency(currency).then((response) => dispatch(Fetch(response)));
};
