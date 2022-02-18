import axios from "axios";
import { GET_MY_CARS, GET_ONE_CAR, GET_CARS } from "../Types/CarTypes";

export const getallcars = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/cars/AllCars");
    dispatch({ type: GET_CARS, payload: res.data.carsList });
  } catch (error) {
    console.log(error);
  }
};

export const getmycars = () => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:5000/api/car/get_cars",
      config
    );
    dispatch({ type: GET_MY_CARS, payload: res });
    //dispatch(getmycars());
  } catch (error) {
    console.log(error);
  }
};

export const getOnecar = (id) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/car/get_car`,
      id,
      config
    );
    dispatch({ type: GET_ONE_CAR, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addOneCar = (newcar, history) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/car/new_car",
      newcar,
      config
    );
    console.log(res.data.newCar);
        history("/display_car");
    // dispatch(getallcars());
    console.log(res.data.carsList);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCar = (id) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/car/delete_car`,
      id,
      config
    );
    dispatch(getmycars());
  } catch (error) {
    console.log(error);
  }
};

export const editCar = (newCar, history) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/car/modify_car`,
      newCar,
      config
    );
    history("/display_car");
    // dispatch(getmycars());
  } catch (error) {
    console.log(error);
  }
};
