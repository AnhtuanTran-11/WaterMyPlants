import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START_LOAD_PLANTS = "START_LOAD_PLANTS";
export const LOADED_PLANTS = "LOADED_PLANTS";
export const FAILED_LOADED_PLANTS = "FAILED_LOADED_PLANTS";
export const ADD_PLANT = "ADD_PLANT";
export const FAILED_ADDED_PLANT = "FAILED_ADDED_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";

export const fetchPlants = (id) => {
  return (dispatch) => {
    dispatch({ type: START_LOAD_PLANTS });
    console.log("fetchplants actions");
    axiosWithAuth()
      .get(`https://watermyplant-tt7.herokuapp.com/plants/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: LOADED_PLANTS, payload: res.data });
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
      .post("https://watermyplant-tt7.herokuapp.com/plants/newplant", plant)
      .then((res) => {
        console.log(res);
        dispatch({ type: ADD_PLANT, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FAILED_ADDED_PLANT, payload: err.message });
      });
  };
};

export const editPlant = (plant) => {
  return (dispatch) => {
    console.log("Edit Plant actions", plant);
    axiosWithAuth()
      .patch(
        `https://watermyplant-tt7.herokuapp.com/plants/plant/${plant.plantId}`,
        plant
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: EDIT_PLANT, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePlant = (plantId) => {
  return (dispatch) => {
    console.log("DELETE Plant actions", plantId);
    axiosWithAuth()
      .delete(`https://watermyplant-tt7.herokuapp.com/plants/plant/${plantId}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: DELETE_PLANT, payload: plantId });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
