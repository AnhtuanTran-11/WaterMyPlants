import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/loginActions";
import { deletePlant, fetchPlants } from "../../store/actions/plantActions";
import AddForm from "../addForm/AddForm";
import EditForm from "../editForm/EditForm";
import Plant from "./Plant";
import MyPlantsStyles from "./myPlantsStyling";

const MyPlants = () => {
  const { myPlants, isLoading } = useSelector((state) => state.plantReducer);
  const user = useSelector((state) => state.loginReducer.userData);
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [plantEditing, setPlantEditing] = useState(null);

  useEffect(() => {
    // console.log("fetchUSER dispatched");
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    // console.log(user.userid);
    if (user.userid) {
      // console.log("fetchplants dispatched");
      dispatch(fetchPlants(user.userid));
    }
  }, [user.userid, dispatch]);

  const plantEditor = (plant) => {
    setAdding(false);
    setEditing(!editing);
    setPlantEditing(plant);
  };

  const plantAdder = () => {
    setEditing(false);
    setAdding(!adding);
  };

  const plantDelete = (plantId) => {
    dispatch(deletePlant(plantId));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setAdding(false);
      setEditing(false);
    }
  };

  return (
    <MyPlantsStyles>
      {adding ? (
        <AddForm setAdding={setAdding} onKeyDown={handleKeyDown} />
      ) : null}
      <div className="myPlantsContainer">
        <h1> MyPlants </h1>
        <button onClick={() => plantAdder()}> Add a plant</button>
        {editing ? (
          <EditForm plant={plantEditing} setEditing={setEditing} />
        ) : null}
        <div className="plantContainer">
          {isLoading ? (
            <div class="loader">Loading...</div>
          ) : (
            myPlants.map((plant) => {
              return (
                <Plant
                  plant={plant}
                  plantEditor={plantEditor}
                  plantDelete={plantDelete}
                  key={plant.plantId}
                />
              );
            })
          )}{" "}
        </div>
      </div>
    </MyPlantsStyles>
  );
};

export default MyPlants;
