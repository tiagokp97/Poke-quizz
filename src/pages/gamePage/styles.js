import styled from "styled-components";

export const GamePageStyles = styled.div`
  .professor {
    height: 200px;
    position: absolute;
    bottom: 0;
    right: 2%;
  }

  @media (min-width: 768px) {
    .professor {
      height: 500px;
      position: absolute;
      bottom: 0;
      right: 5%;
    }
  }
`;
