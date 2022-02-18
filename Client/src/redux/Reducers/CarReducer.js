import { GET_MY_CARS, GET_ONE_CAR, GET_CARS } from "../Types/CarTypes";

const InitialState = {
  Cars: null,
  MyCars: null,
  errors: null,
  Car: null,
};

const CarReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return { ...state, Cars: action.payload };
    // case FAIL_POSTS:
    //     return {...state, errors : action.payload.errors}
    case GET_MY_CARS:
      return { ...state, MyCars: action.payload };
    case GET_ONE_CAR:
      return { ...state, Car: action.payload };

    default:
      return state;
  }
};

export default CarReducer;
