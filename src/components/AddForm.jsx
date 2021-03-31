import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addPlant } from "../store/actions/plantActions";
import plantSchema from "./validation/plantSchema";

const AddForm = () => {
  const plants = useSelector((state) => state.plantReducer.myPlants);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      nickname: "Plant",
      species: "Species of plant",
      h20Frequency: 5,
    },
    validationSchema: plantSchema,
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
        {formik.errors.nickname && <p>{formik.errors.nickname}</p>}
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
        {formik.errors.species && <p>{formik.errors.species}</p>}
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
        {formik.errors.h20Frequency && <p>{formik.errors.h20Frequency}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddForm;
