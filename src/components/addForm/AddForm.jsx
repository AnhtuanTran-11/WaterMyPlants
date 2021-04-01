import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addPlant } from "../../store/actions/plantActions";
import plantSchema from "../validation/plantSchema";
import AddFormStyles from "./addStyles";

const AddForm = ({ setAdding }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nickname: "",
      species: "",
      h2oFrequency: "",
      img: "",
      baseDate: Date.now(),
    },
    validationSchema: plantSchema,
    onSubmit: (values) => {
      dispatch(addPlant(values));
      setAdding(false);
    },
  });

  return (
    <AddFormStyles>
      <div className="addFormContainer"></div>
      <div className="childAddContainer">
        <h1> Add a new plant</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="innerForm">
            <label htmlFor="nickname"> </label>
            Nickname:
            <input
              name="nickname"
              id="nickname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nickname}
              onBlur={formik.handleBlur}
            />
            <span className="error">
              {formik.touched.nickname && formik.errors.nickname && (
                <p>{formik.errors.nickname}</p>
              )}{" "}
            </span>
            <label htmlFor="species"> </label>
            Species:
            <input
              name="species"
              id="species"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.species}
              onBlur={formik.handleBlur}
            />
            <span className="error">
              {formik.touched.species && formik.errors.species && (
                <p>{formik.errors.species}</p>
              )}{" "}
            </span>
            <label htmlFor="h2oFrequency"> </label>
            Next watering (days):
            <input
              name="h2oFrequency"
              id="h2oFrequency"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.h2oFrequency}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="img"> </label>
            Add an image:
            <input
              name="img"
              id="img"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.img}
              onBlur={formik.handleBlur}
            />
            <span className="error">
              {formik.touched.h2oFrequency && formik.errors.h2oFrequency && (
                <p>{formik.errors.h2oFrequency}</p>
              )}{" "}
            </span>
          </div>
          <div className="buttonContainer">
            <button onClick={() => setAdding(false)}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>

        <img src="https://bit.ly/2QMRGYs" alt="plants" />
      </div>
    </AddFormStyles>
  );
};

export default AddForm;
