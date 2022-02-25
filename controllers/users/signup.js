import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase.js";
import { validateRegister } from "../../utils.js";

const signup = async (req, res) => {
  const { email, password, confirmPassword, handle } = req.body;
  // validate the user field
  const { errors, valid } = validateRegister(
    email,
    password,
    confirmPassword,
    handle
  );
  if (!valid) return res.status(400).json({ errors });
  const newUser = { email, password, confirmPassword, handle };
  const { user } = await createUserWithEmailAndPassword(
    auth,
    newUser.email,
    newUser.password
  );
  return res.json({ message: `User with ${user.uid} signup successfully` });
};

export { signup };
