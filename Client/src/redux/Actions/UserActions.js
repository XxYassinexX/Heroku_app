import axios from "axios";
import { GET_ONE_USER, GET_USERS } from "../Types/UserTypes";


export const getallUsers = () => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:5000/api/user/get_users",
      config
    );
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const editUser = (user, history) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/user/update_user`,
      user,
      config
    );
    dispatch(getOneUser());
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/user/delete_user`,
      id,
      config
    );
    dispatch(getallUsers());
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = (id) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(
      `http://localhost:5000/api/user/get_user`,
      config
    );
    dispatch({ type: GET_ONE_USER, payload: res.data });
    dispatch(getallUsers());
  } catch (error) {
    console.log(error);
  }
};
