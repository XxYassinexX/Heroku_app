import { GET_ONE_USER, GET_USERS } from "../Types/UserTypes";

const InitialState = {
  users: null,
  user: null,
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_ONE_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
