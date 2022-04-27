import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 95%;
  height: 280px;

  font-family: "Joti One", cursive;
  font-size: 1rem;
  color: #ffcb04;
  text-shadow: 3px 3px 0 #39569e, -1px -1px 0 #39569e, 1px -1px 0 #39569e,
    -1px 4px 0 #39569e, 1px 1px 0 #39569e;

  h1 {
    font-size: 1.5rem;
  }

  .pokemonImg {
    width: 100%;
    text-align: center;
    img {
      height: 250px;
      filter: brightness(0);
    }
  }

  .inputBox {
    width: 100%;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;

    div {
      border-bottom: 2px solid var(--yellow);
      margin: 0 10px;
      border-radius: 4px;

      input {
        height: 100%;
        background-color: #f3f3f3;
        border: none;
        outline: none;
        border-radius: 4px;
        background-color: transparent;

        border-bottom: 2px solid var(--blue);

        font-family: "Joti One", cursive;
        font-size: 1rem;
        color: #ffcb04;
        text-shadow: 3px 3px 0 #39569e, -1px -1px 0 #39569e, 1px -1px 0 #39569e,
          -1px 4px 0 #39569e, 1px 1px 0 #39569e;

        &::placeholder {
          text-align: center;
        }
      }
    }
    span {
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid var(--yellow);
      border-radius: 50%;
      &:hover {
        cursor: pointer;
        border: 2px solid var(--blue);
        color: var(--blue);
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;
