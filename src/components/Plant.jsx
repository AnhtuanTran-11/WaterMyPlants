import React from "react";

const Plant = ({ plant, plantEditor, plantDelete }) => {
  return (
    <div key={plant.id}>
      <h1 onClick={() => plantEditor(plant)}>
        {" "}
        {plant.nickname} is a {plant.species}{" "}
        {plant.h2oFrequency &&
          `that needs to be watered every ${plant.h2oFrequency} days`}
      </h1>
      <button onClick={() => plantDelete(plant.plantId)}> DELETE </button>
    </div>
  );
};

export default Plant;
