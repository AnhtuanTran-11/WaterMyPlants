import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START_LOAD_PLANTS = "START_LOAD_PLANTS";
export const LOADED_PLANTS = "LOADED_PLANTS";
export const FAILED_LOADED_PLANTS = "FAILED_LOADED_PLANTS";
export const ADD_PLANT = "ADD_PLANT";
export const FAILED_ADDED_PLANT = "FAILED_ADDED_PLANT";

export const fetchPlants = () => {
  return (dispatch) => {
    dispatch({ type: START_LOAD_PLANTS });
    console.log("fetchplants actions");
    axiosWithAuth()
      .get("/pokemon")
      .then((res) => {
        console.log(res.data.results);
        dispatch({ type: LOADED_PLANTS, payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FAILED_LOADED_PLANTS, payload: err.message });
      });
  };
};

export const addPlant = (plant) => {
  return (dispatch) => {
    console.log("Add Plant actions", plant);
    axiosWithAuth()
      .post("https://jsonplaceholder.typicode.com/post", plant)
      .then((res) => {
        console.log(res);
        dispatch({ type: ADD_PLANT, payload: res });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FAILED_ADDED_PLANT, payload: err.message });
      });
  };
};
