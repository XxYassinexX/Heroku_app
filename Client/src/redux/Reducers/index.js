import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CarReducer from "./CarReducer";
import UserReducer from "./UserReducer";
import PostReducer from "./PostReducer";
// import ApplicationReducer from "./ApplicationReducer";

const rootReducer = combineReducers({
  AuthReducer,
  CarReducer,
  UserReducer,
  PostReducer,
  // ApplicationReducer,
});
export default rootReducer;
