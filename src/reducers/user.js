// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const INITIAL_USER_STATE = { email: '' };
const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    console.log(action);
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
