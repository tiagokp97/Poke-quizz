import styled from "styled-components";

export const StyledLandingHeader = styled.header`
  height: 30px;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  color: white;
  position: fixed;
  width: 100vw;

  a {
    cursor: pointer;
    border-radius: 4px;
    padding: 2px;
  }

  .sobre {
    background: linear-gradient(to right, #e16042 20%, #2c2c2c 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
  }

  .sobre:hover {
    background-position: left bottom;
    color: #fce9ae;
    /* animation: colorRed, 1s, forwards; */
  }

  .contatos {
    background: linear-gradient(to right, #379fdc 20%, #2c2c2c 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
  }

  .contatos:hover {
    background-position: left bottom;
    color: #fce9ae;
  }
`;

export const StyledProject = styled.main`
  height: 100vh;
  background: #e16042;
  background: linear-gradient(10deg, #e16042 0%, #ec9f5d 40%, #fce9ae 80%);
  background: -webkit-linear-gradient(
    10deg,
    #e16042 0%,
    #ec9f5d 40%,
    #fce9ae 80%
  );
  background: -moz-linear-gradient(10deg, #e16042 0%, #ec9f5d 40%, #fce9ae 80%);
  border-bottom: 2px solid black;
`;

export const StyledSobre = styled.main`
  height: 100vh;
  background: #379fdc;
  background: linear-gradient(10deg, #379fdc 0%, #58bced 40%, #fffac6 80%);
  background: -webkit-linear-gradient(
    10deg,
    #379fdc 0%,
    #58bced 40%,
    #fffac6 80%
  );
  background: -moz-linear-gradient(10deg, #379fdc 0%, #58bced 40%, #fffac6 80%);
`;
