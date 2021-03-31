import {
  ADD_PLANT,
  DELETE_PLANT,
  EDIT_PLANT,
  FAILED_ADDED_PLANT,
  FAILED_LOADED_PLANTS,
  LOADED_PLANTS,
  START_LOAD_PLANTS,
} from "../actions/plantActions";

const initialData = {
  myPlants: [
    {
      id: 500,
      nickname: "",
      species: "",
      h2oFrequency: 0,
      // image: (optional)
    },
  ],
  isLoading: false,
  errorMessage: "",
};

export const plantReducer = (state = initialData, action) => {
  switch (action.type) {
    case START_LOAD_PLANTS:
      return { ...state, isLoading: true };
    case LOADED_PLANTS:
      return {
        ...state,
        isLoading: false,
        myPlants: action.payload,
        errorMessage: "",
      };
    case FAILED_LOADED_PLANTS:
      return { ...state, errorMessage: action.payload, isLoading: false };
    case ADD_PLANT:
      return { ...state, myPlants: [...state.myPlants, action.payload] };
    case FAILED_ADDED_PLANT:
      return { ...state, errorMessage: action.payload };
    case EDIT_PLANT:
      console.log(state.myPlants);
      return {
        ...state,
        myPlants: state.myPlants.map((plant) => {
          if (plant.plantId === action.payload.plantId) {
            return action.payload;
          } else {
            return plant;
          }
        }),
      };
    case DELETE_PLANT:
      return {
        ...state,
        myPlants: state.myPlants.filter(
          (plant) => plant.plantId !== action.payload
        ),
      };
    default:
      return state;
  }
};
