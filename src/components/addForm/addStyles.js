import styled from "styled-components";

const AddFormStyles = styled.div`
  * {
    box-sizing: border-box;
  }
  .addFormContainer {
    position: fixed;
    top: 10%;
    left: 10%;
    height: 80vh;
    width: 80%;
    background: lightgray;
    text-align: center;
    border-radius: 20px;
    opacity: 0.9;
    box-sizing: border-box;
  }
  .childAddContainer {
    position: fixed;
    top: 10%;
    left: 10%;
    height: 80vh;
    width: 80%;
    text-align: center;
    border-radius: 20px;
    box-sizing: border-box;
  }
  form {
  }
  .errors {
    color: red;
  }
  .innerForm {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 10rem;
    border-radius: 3px;
    height: 1.3rem;
    text-align: center;
    border: 1px solid lightgray;
  }
  img {
    height: 40%;
    border-radius: 15px;
    padding-top: 2%;
    padding-bottom: 10px;
    /* max-width: 60%; */
  }
  button {
    width: 6rem;
    height: 2rem;
    background: green;
    border-radius: 3px;
    border: none;
    color: white;
    margin: 10px;
  }
  @media only screen and (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

export default AddFormStyles;
