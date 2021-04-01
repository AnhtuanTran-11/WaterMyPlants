import styled from "styled-components";

const NavBarStyles = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  padding: 1.5rem;
  background: #00ab84;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-rendering: geometricPrecision;
  margin: 0 auto;
  z-index: 9999;
  a {
    text-decoration: none;
    color: black;
  }
  @media only screen and (max-width: 500px) {
    width: 86%;
  }
`;

export default NavBarStyles;
