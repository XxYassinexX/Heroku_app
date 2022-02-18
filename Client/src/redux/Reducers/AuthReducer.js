import {

  FAIL,
  LOAD,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../Types/AuthTypes";

const InitialState = {
  user: null,
  load: false,
  auth: false,
  errors: null,
  users: null,
};

const AuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOAD:
      return { ...state, load: true };
    case REGISTER:
      // localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.userToAdd,
        load: false,
        auth: true,
      };
    case FAIL:
      return {
        ...state,
        errors: action.payload,
        load: false,
        auth: false,
      };
    case LOGIN:
      console.log(action.payload);
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        load: false,
        auth: true,
        user: action.payload.userIsFound,
      };
    
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null, auth: false, errors: null };
    default:
      return state;
  }
};

export default AuthReducer;
