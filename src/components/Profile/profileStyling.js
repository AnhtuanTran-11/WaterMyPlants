import styled from "styled-components";

const ProfileStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
  .cardContainer {
    border: 1px solid lightgrey;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 2rem 2rem;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  }
  button{
    width: 10rem;
    background: green;
    border-radius: 3px;
    border: none;
    color: white;
    margin-bottom: 15px;
    height: 25px;
  }
  @media only screen and (max-width: 500px) {
    .cardContainer {

    width: 80%;
   
  }
`;

export default ProfileStyles;
