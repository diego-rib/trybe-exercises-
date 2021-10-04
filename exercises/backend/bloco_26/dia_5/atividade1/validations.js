function validateUsername(username) {
  // 1.1 - username deve ter mais de 3 caracteres
  const validUsername = /.{3,}/;
  return validUsername.test(username);
}

function validateCredentials(email, password) {
  // 1.2 - email deve ter o formato email@mail.com
  const validEmail = /^[A-Za-z0-9._]+@([A-Za-z]+\.)[A-Za-z]{2,3}(\.[A-Za-z]{2})?$/;

  // 1.3 - password deve conter no mínimo 4 caracteres e no máximo 8 (todos números)
  const validPassword = /\b[\d]{4,8}\b/;
  return validEmail.test(email) && validPassword.test(password);
}

module.exports = {
  validateUsername,
  validateCredentials,
};
