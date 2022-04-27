import styled from "styled-components";

export const MobileNav = styled.div`
  animation: myAnim 0.5s ease 0s 1 normal forwards;
  z-index: 2;

  font-family: "Joti One", cursive;
  font-size: 2rem;
  color: #ffcb04;
  text-shadow: 3px 3px 0 #39569e, -1px -1px 0 #39569e, 1px -1px 0 #39569e,
    -1px 4px 0 #39569e, 1px 1px 0 #39569e;

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
  color: var(--yellow);

  background-color: var(--blue);
  position: fixed;

  right: 0;
  top: 0;
  width: 50%;
  height: 100vh;

  div {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    position: absolute;
    bottom: 200px;
    background-color: var(--blue);
    color: var(--yellow);
    text-align: center;
  }

  .sairMenu:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
  }

  @media (min-width: 768px) {
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;

    button {
      display: none;
    }

    animation: myAnim 0s ease 0s 1 normal forwards;
  }
`;
