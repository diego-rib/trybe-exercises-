const INITIAL_STATE = {
  logins: {
    'admin': 'admin',
  },
  authenticated: false,
}

const loginUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      authenticated: true,
    };
  case 'LOGOUT':
    return {
      ...state,
      authenticated: false,
    };
  default:
    return state;
  };
};

export default loginUserReducer;
