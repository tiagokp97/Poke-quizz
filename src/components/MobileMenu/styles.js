import styled from "styled-components";

export const MobileNav = styled.div`
  font-size: 1rem;

  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  background-color: #fff;

  div {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
  }

  div:hover {
    border-bottom: 2px solid black;
    cursor: pointer;
    /* filter: brightness(1.5); */
  }

  .sairMenu {
    font-size: 1rem;
    border: none;
    height: 40px;
    background-color: #fff;

    position: absolute;
    bottom: 0;
  }

  .sairMenu:hover {
    cursor: pointer;
  }
`;
