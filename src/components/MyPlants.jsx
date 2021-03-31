import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/actions/loginActions";
import { deletePlant, fetchPlants } from "../store/actions/plantActions";
import AddForm from "./AddForm";
import EditForm from "./editForm/EditForm";

const MyPlants = () => {
  const { myPlants, isLoading } = useSelector((state) => state.plantReducer);
  const user = useSelector((state) => state.loginReducer.userData);
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [plantEditing, setPlantEditing] = useState(null);

  useEffect(() => {
    console.log("fetchUSER dispatched");
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    console.log(user.userid);
    if (user.userid) {
      console.log("fetchplants dispatched");
      dispatch(fetchPlants(user.userid));
    }
  }, [user.userid]);

  const plantEditor = (plant) => {
    setEditing(!editing);
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
      {editing ? (
        <EditForm plant={plantEditing} setEditing={setEditing} />
      ) : null}
      {isLoading
        ? "Loading Plants"
        : myPlants.map((plant) => {
            return (
              <div key={plant.id}>
                <h1 onClick={() => plantEditor(plant)}>
                  {" "}
                  {plant.nickname} is a {plant.species}{" "}
                  {plant.h2oFrequency &&
                    `that needs to be watered every ${plant.h2oFrequency} days`}
                </h1>
                <button onClick={() => plantDelete(plant)}> DELETE </button>
              </div>
            );
          })}
    </div>
  );
};

export default MyPlants;
