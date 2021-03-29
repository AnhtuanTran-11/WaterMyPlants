import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addPlant } from "../store/actions/plantActions";

const AddForm = () => {
  const plants = useSelector((state) => state.plantReducer.myPlants);
  const dispatch = useDispatch();
  console.log(plants);

  const formik = useFormik({
    initialValues: {
      nickname: "Plant",
      species: "Species of plant",
      h20Frequency: 5,
    },
    onSubmit: (values) => {
      dispatch(addPlant(values));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>
          nickname
          <input
            name="nickname"
            id="nickname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nickname}
          />
        </label>
        <label>
          Species
          <input
            name="species"
            id="species"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.species}
          />
        </label>
        <label>
          Watering Frequency (days between watering)
          <input
            name="h20Frequency"
            id="h20Frequency"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.h20Frequency}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddForm;
