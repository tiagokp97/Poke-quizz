import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 95%;
  height: 280px;

  .qeepBox {
    h1 {
      font-family: "Joti One", cursive;
      font-size: 1.5rem;
      color: #ffcb04;
      text-shadow: 3px 3px 0 #39569e, -1px -1px 0 #39569e, 1px -1px 0 #39569e,
        -1px 4px 0 #39569e, 1px 1px 0 #39569e;
    }
  }

  .pokemonImg {
    width: 100%;
    text-align: center;
    img {
      height: 250px;
      filter: brightness(0);
    }
  }

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;
