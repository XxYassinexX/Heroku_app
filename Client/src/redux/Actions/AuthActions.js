import axios from "axios";

import {
  FAIL,
  LOAD,
  REGISTER,
  LOGIN,
  LOGOUT,
} from "../Types/AuthTypes.js";

export const register = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    const res = await axios.post("http://localhost:5000/api/user/SignUP", user);
    dispatch({ type: REGISTER, payload: res });
     history("/login");
  } catch (error) {
    dispatch({ type: FAIL, payload: error });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    const res = await axios.post("http://localhost:5000/api/user/signin", user);
    dispatch({ type: LOGIN, payload: res.data });
    history("/Dashboard");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const logout = (history) => {
  return { type: LOGOUT };
};

