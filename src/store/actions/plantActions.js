import { axiosWithAuth } from "axios";

export const START_LOAD_PLANTS = "START_LOAD_PLANTS";
export const LOADED_PLANTS = "LOADED_PLANTS";
export const FAILED_LOADED_PLANTS = "FAILED_LOADED_PLANTS";

export const fetchPlants = () => {
  return (dispatch) => {
    dispatch({ type: START_LOAD_PLANTS });
    axiosWithAuth()
      .get("pokemon")
      .then((res) => {
        console.log(res);
        dispatch({ type: LOADED_PLANTS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FAILED_LOADED_PLANTS, payload: err.message });
      });
  };
};
