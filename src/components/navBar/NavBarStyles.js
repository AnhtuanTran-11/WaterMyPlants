import styled from 'styled-components';

const NavBarStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  padding: 1.5rem;
  background: #00AB84;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-rendering: geometricPrecision;
  a {
    text-decoration: none;
    color: black;
  }
  
`

export default NavBarStyles;
