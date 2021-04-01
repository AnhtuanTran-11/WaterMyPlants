import React from "react";
import PlantStyles from "./plantStyling";

const Plant = ({ plant, plantEditor, plantDelete }) => {
  const waterCalculator = () => {
    let dayCounter = Math.floor((Date.now() - 1617146130296) / 86400000);
    let daysToWater = plant.h2oFrequency - (dayCounter % plant.h2oFrequency);
    if (dayCounter % plant.h2oFrequency === 0) {
      return "Water Today";
    } else {
      return daysToWater;
    }
  };

  let waterResult = waterCalculator();
  console.log(plant.img);
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
