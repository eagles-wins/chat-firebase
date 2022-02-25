const validateRegister = (email, password, confirmPassword, handle) => {
  const errors = {};
  if (email.trim() === "") {
    errors.email = "Please Enter Email";
  } else {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(regEx)) {
      errors.email = "Please Enter a valid Email";
    }
  }

  if (password === "") {
    errors.password = "Please Enter Password";
  } else if (password !== confirmPassword) {
    errors.password = "Password Must Be The Same As Confirm Password";
  }

  if (handle === "") {
    errors.handle = "Please Enter User Handle";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

export { validateRegister };
