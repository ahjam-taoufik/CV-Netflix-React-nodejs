import axios from "axios";
import { toastError } from "../utils/toastMessage";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    toastError({title:'Wrong password or email!'})
    dispatch(loginFailure());
  }
};