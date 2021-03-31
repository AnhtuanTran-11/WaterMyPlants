import styled from "styled-components";

const MyPlantsStyles = styled.div`
  .myPlantsContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .plantContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .textContainer {
    border-radius: 10px;
    opacity: 0.8;
    background: #e6e6e6;
    margin-top: 20%;
    width: 70%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 5px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 5px;
  }
  label {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: green;
  }
`;

export default MyPlantsStyles;
