import React from "react";
import PlantStyles from "./plantStyling";
import { useDispatch } from "react-redux";
import { editPlant } from "../../store/actions/plantActions";

const Plant = ({ plant, plantEditor, plantDelete }) => {
  const dispatch = useDispatch();
  // const waterCalculator = () => {
  //   let dayCounter = Math.floor((Date.now() - 1617146130296) / 86400000);
  //   let daysToWater = plant.h2oFrequency - (dayCounter % plant.h2oFrequency);
  //   if (dayCounter % plant.h2oFrequency === 0) {
  //     return "Water Today";
  //   } else {
  //     return daysToWater;
  //   }
  // };

  const waterCalculator = () => {
    let dayCounter = Math.floor((Date.now() - plant.baseDate) / 86400000);
    let daysToWater = plant.h2oFrequency - (dayCounter % plant.h2oFrequency);
    if (Date.now() - plant.baseDate < 86400000) {
      return plant.h2oFrequency;
    } else if (dayCounter % plant.h2oFrequency === 0) {
      return "Water Today";
    } else {
      return daysToWater;
    }
  };

  const clickOnWater = () => {
    dispatch(
      editPlant({
        nickname: plant.nickname,
        species: plant.species,
        h2oFrequency: plant.h2oFrequency,
        plantId: plant.plantId,
        img: plant.img,
        baseDate: Date.now(),
      })
    );
  };

  let waterResult = waterCalculator();

  return (
    <PlantStyles>
      <div className="cardContainer" key={plant.plantId}>
        <img
          src={plant.img ? plant.img : "https://bit.ly/3frwdyF"}
          alt="personal plant"
          className="plantImg"
        />
        <h2 className="plantNickname">{plant.nickname}</h2>
        <h3 className="plantSpecies">{plant.species}</h3>
        <p className="watering">
          Water Frequency: every {plant.h2oFrequency} days
        </p>
        <p className="watering">
          Days until water: <br></br> <span> {waterResult} </span>{" "}
        </p>
        <button className="waterBut" onClick={() => clickOnWater()}>
          {" "}
          I just watered{" "}
        </button>
        <div className="buttonContainer">
          <button
            className="deleteBut"
            onClick={() => plantDelete(plant.plantId)}
          >
            {" "}
            DELETE{" "}
          </button>
          <button className="editBut" onClick={() => plantEditor(plant)}>
            {" "}
            EDIT{" "}
          </button>
        </div>
      </div>
    </PlantStyles>
  );
};

export default Plant;
