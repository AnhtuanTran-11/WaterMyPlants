import styled from "styled-components";

const EditFormStyles = styled.div`
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
  }
  .childAddForm {
    position: fixed;
    top: 10%;
    left: 10%;
    height: 80vh;
    width: 80%;
    text-align: center;
    border-radius: 20px;
  }
  form {
    margin-top: 5%;
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
    margin-top: 40px;
    margin-bottom: 10px;
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

export default EditFormStyles;
