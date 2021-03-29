import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlants } from "../store/actions/plantActions";
import AddForm from "./AddForm";
import EditForm from './editForm/EditForm';

const MyPlants = () => {
  const plants = useSelector((state) => state.plantReducer.myPlants);
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [plantEditing, setPlantEditing] = useState(null);
  console.log(plants);

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  const plantEditor = (plant) => {
    setEditing(true);
    setPlantEditing(plant)
  }
  return (
    <div>
      <p> MyPlants </p>
      <button onClick={() => setAdding(!adding)}> Add a plant</button>
      {adding ? <AddForm /> : null}
      {editing ? <EditForm plant={plantEditing} /> : null}
      {plants.map((plant) => {
        return <h1 onClick={() => plantEditor(plant)} key={plant.url}> {plant.name} </h1>;
      })}
    </div>
  );
};

export default MyPlants;
