const INITIAL_STATE = {
  clients: [],
}

const signUpClientReducer = (state = INITIAL_STATE, { type, client }) => {
  switch (type) {
  case 'SIGN_UP':
    return {
      clients: [...state.clients, client],
    };
  case 'REMOVE':
    const clientsCopy = state.clients.concat();
    const clients = clientsCopy.filter(({ email }) => email !== client.email);
    return {
      clients,
    }
  default:
    return state;
  };
};

export default signUpClientReducer;
