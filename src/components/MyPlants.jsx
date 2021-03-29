import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlants } from "../store/actions/plantActions";
import AddEditForm from "./AddEditForm";

const MyPlants = () => {
  const plants = useSelector((state) => state.plantReducer.myPlants);
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);
  console.log(plants);

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  return (
    <div>
      <p> MyPlants </p>
      <button onClick={() => setAdding(!adding)}> Add a plant</button>
      {adding ? <AddEditForm /> : null}
      {plants.map((plant) => {
        return <h1 key={plant.url}> {plant.name} </h1>;
      })}
    </div>
  );
};

export default MyPlants;
