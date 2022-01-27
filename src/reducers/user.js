// Esse reducer será responsável por tratar as informações da pessoa usuária
const STATE_INITIAL = {
  email: '',
  password: '',
};

function user(state = STATE_INITIAL, action) {
  switch (action.type) {
  case 'USER_ADD':
    return {
      ...state,
      email: action.state.email,
      password: action.state.password,
    };
  default:
    return state;
  }
}

export default user;
