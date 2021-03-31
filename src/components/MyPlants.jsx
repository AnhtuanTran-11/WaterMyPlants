import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/actions/loginActions";
import { deletePlant, fetchPlants } from "../store/actions/plantActions";
import AddForm from "./AddForm";
import EditForm from "./editForm/EditForm";
import Plant from "./Plant";

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

  const plantAdder = (plant) => {
    setEditing(false);
    setAdding(!adding);
  };

  const plantDelete = (plantId) => {
    dispatch(deletePlant(plantId));
  };

  return (
    <div>
      <h1> MyPlants </h1>
      <button onClick={() => plantAdder()}> Add a plant</button>
      {adding ? <AddForm /> : null}
      {editing ? (
        <EditForm plant={plantEditing} setEditing={setEditing} />
      ) : null}
      {isLoading
        ? "Loading Plants"
        : myPlants.map((plant) => {
            return (
              <Plant
                plant={plant}
                plantEditor={plantEditor}
                plantDelete={plantDelete}
              />
            );
          })}
    </div>
  );
};

export default MyPlants;
