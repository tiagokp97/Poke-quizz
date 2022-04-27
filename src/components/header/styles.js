import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 70px;
  width: 100vw;
  background-color: teal;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  h1 {
    font-family: "Joti One", cursive;
    font-size: 2rem;
    color: #ffcb04;
    text-shadow: 3px 3px 0 #39569e, -1px -1px 0 #39569e, 1px -1px 0 #39569e,
      -1px 4px 0 #39569e, 1px 1px 0 #39569e;
  }

  button {
    font-family: "Joti One", cursive;
    font-size: 1rem;
    color: #ffcb04;
    text-shadow: 3px 3px 0 #39569e, -1px -1px 0 #39569e, 1px -1px 0 #39569e,
      -1px 4px 0 #39569e, 1px 1px 0 #39569e;
  }

  .buttonMenu {
    margin-left: auto;
  }
  .desktopMenu {
    display: none;
  }

  @media (min-width: 768px) {
    height: 100px;

    .buttonMenu {
      display: none;
    }

    .desktopMenu {
      display: flex;
    }
  }
`;
