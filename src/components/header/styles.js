import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 70px;
  width: 100vw;
  background-color: teal;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  img {
    height: 100%;
  }

  .buttonMenu {
    margin-left: auto;
  }
  .desktopMenu {
    display: none;
  }

  @media (min-width: 768px) {
    .buttonMenu {
      display: none;
    }

    .desktopMenu {
      display: flex;
    }
  }
`;
