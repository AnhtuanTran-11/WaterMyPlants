import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { editPlant } from "../../store/actions/plantActions";
import EditFormStyles from "./editFormStyles";

const EditForm = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nickname: props.plant.nickname,
      species: props.plant.species,
      h2oFrequency: props.plant.h2oFrequency,
    },
    onSubmit: (values) => {
      dispatch(
        editPlant({
          nickname: values.nickname,
          species: values.species,
          h2oFrequency: values.h2oFrequency,
          plantId: props.plant.plantId,
        })
      );
      props.setEditing(false);
    },
  });

  return (
    <EditFormStyles>
      <div className="addFormContainer"></div>
      <div className="childAddForm">
        <h1> Edit your plant</h1>
        <form onSubmit={formik.handleSubmit}>
          <label>
            Nickname:
            <input
              name="nickname"
              id="nickname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nickname}
            />
          </label>
          <label>
            Species:
            <input
              name="species"
              id="species"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.species}
            />
          </label>
          <label>
            Next watering (days):
            <input
              name="h2oFrequency"
              id="h2oFrequency"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.h2oFrequency}
            />
          </label>
          <button onClick={() => props.setEditing(false)}>Cancel</button>
          <button type="submit">Submit</button>
        </form>
        <img src="https://bit.ly/3fsfoUg" alt="plants" />
      </div>
    </EditFormStyles>
  );
};

export default EditForm;
