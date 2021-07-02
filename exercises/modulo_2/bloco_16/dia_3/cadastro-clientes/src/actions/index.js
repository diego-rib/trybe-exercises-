export const loginUser = () => ({
  type: 'LOGIN',
});

export const logoutUser = () => ({
  type: 'LOGOUT',
});

export const signUpClient = (client) => ({
  type: 'SIGN_UP',
  client,
});


export const removeClient = (client) => ({
  type: 'REMOVE',
  client,
});
