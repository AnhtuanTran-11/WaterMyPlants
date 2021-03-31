import React from "react";
import PlantStyles from "./plantStyling"

const Plant = ({ plant, plantEditor, plantDelete }) => {
  return (
    <PlantStyles>
    <div className="cardContainer" key={plant.plantId}>
      <img src="https://bit.ly/3frwdyF" className="plantImg"/>
      <h2 className="plantNickname">{plant.nickname}</h2>
      <h3 className="plantSpecies">{plant.species}</h3>
      <p className="watering">{plant.h2oFrequency}</p>
      <div className="buttonContainer">
      <button className="deleteBut" onClick={() => plantDelete(plant.plantId)}> DELETE </button>
      <button className="editBut" onClick={() => plantEditor(plant)}> EDIT </button>
      </div>
    </div>
    </PlantStyles>
  );
};

export default Plant;
