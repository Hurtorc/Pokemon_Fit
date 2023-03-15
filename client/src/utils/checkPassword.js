// create a function that checks a password for a minimum length of 4 characters

function checkPassword(password) {
  if (password.length < 4) {
    return false;
  } else {
    return true;
  }
}
