import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePlant, fetchPlants } from "../store/actions/plantActions";
import AddForm from "./AddForm";
import EditForm from "./editForm/EditForm";

const MyPlants = () => {
  const { myPlants, isLoading } = useSelector((state) => state.plantReducer);
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [plantEditing, setPlantEditing] = useState(null);
  console.log(myPlants, isLoading);

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  const plantEditor = (plant) => {
    setEditing(true);
    setPlantEditing(plant);
  };

  const plantDelete = (plant) => {
    dispatch(deletePlant(plant));
  };

  return (
    <div>
      <h1> MyPlants </h1>
      <button onClick={() => setAdding(!adding)}> Add a plant</button>
      {adding ? <AddForm /> : null}
      {editing ? <EditForm plant={plantEditing} /> : null}
      {isLoading
        ? "Loading Plants"
        : myPlants.map((plant) => {
            return (
              <div key={plant.url}>
                <h1 onClick={() => plantEditor(plant)} key={plant.url}>
                  {" "}
                  {plant.name}{" "}
                </h1>
                <button onClick={() => plantDelete(plant)}> DELETE </button>
              </div>
            );
          })}
    </div>
  );
};

export default MyPlants;
