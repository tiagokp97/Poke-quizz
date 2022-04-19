import styled from "styled-components";

export const MobileNav = styled.div`
  animation: myAnim 0.5s ease 0s 1 normal forwards;

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  font-size: 0.85rem;
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
    width: 100%;
    text-align: start;
    font-size: 0.85rem;
    border: none;
    height: 40px;
    background-color: #fff;

    position: absolute;
    bottom: 0;
  }

  .sairMenu:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    .sairMenu {
      display: none;
    }

    button {
      display: none;
    }

    animation: myAnim 0s ease 0s 1 normal forwards;
  }
`;
