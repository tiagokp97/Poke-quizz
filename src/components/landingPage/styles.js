import styled from "styled-components";

export const StyledLandingHeader = styled.header`
  height: 40px;
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
  z-index: 2;
  width: 100vw;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;

  a {
    cursor: pointer;
    border-radius: 4px;
    padding: 2px;
    font-size: 1.2rem;
  }

  .projeto {
    background: linear-gradient(to right, #e16042 20%, #2c2c2c 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
  }

  .projeto:hover {
    background-position: left bottom;
    color: #fce9ae;
  }

  .sobre {
    background: linear-gradient(to right, #379fdc 20%, #2c2c2c 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
  }

  .sobre:hover {
    background-position: left bottom;
    color: #fce9ae;
  }

  .contatos {
    background: linear-gradient(to right, #4c9f70 20%, #2c2c2c 50%);
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
`;

export const StyledSobre = styled.main`
  height: 100vh;
  background: #6279b8;
  background: linear-gradient(10deg, #6279b8 0%, #58bced 40%, #fffac6 80%);
  background: -webkit-linear-gradient(
    10deg,
    #6279b8 0%,
    #58bced 40%,
    #fffac6 80%
  );
  background: -moz-linear-gradient(10deg, #6279b8 0%, #58bced 40%, #fffac6 80%);
`;

export const StyledContatos = styled.main`
  height: 100vh;
  background: #4c9f70;
  position: relative;
  background: linear-gradient(10deg, #4c9f70 0%, #8fc28d 40%, #ebe291 100%);
  background: -webkit-linear-gradient(
    10deg,
    #4c9f70 0%,
    #88ffbd 40%,
    #ebe291 100%
  );
  background: -moz-linear-gradient(
    10deg,
    #4c9f70 0%,
    #8fc28d 40%,
    #ebe291 100%
  );

  img {
    width: 50px;
  }

  @media (max-width: 400px) {
    aside {
      display: flex;
      justify-content: center;
    }
    .container {
      margin-top: 50px;
    }

    h1 {
      max-width: 280px;
      color: #2c2c2c;
      height: 176px;
      font-size: 50px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      text-shadow: 1px 1px 2px black;
    }

    h2 {
      margin-top: 5px;
      color: #2c2c2c;
      font-size: 17px;
      background: -webkit-linear-gradient(#eee, black);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: brightness(0.8);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    img {
      display: flex;
      width: 100px;
      border-radius: 50%;
    }

    .container-contatos {
      display: flex;
      align-items: center;
      padding: 20px;
      position: absolute;
      bottom: 0;
      column-gap: 30px;
    }
    .linkedin {
      height: 80px;
      border-radius: 0;
      position: relative;
    }

    .github {
      height: 50px;
    }

    .container-infos {
      display: flex;
      top: 15px;
      left: 15px;
      column-gap: 5px;
      position: absolute;
      font-size: 12px;
    }

    .container-infos > a {
      text-decoration: none;
      padding: 8px;
      font-weight: 600;
      border-radius: 4px;
      color: black;
      font-size: 14px;
      background: -webkit-linear-gradient(#eee, #333);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: myAnim 1s ease 0s 1 normal forwards;
      filter: brightness(0.8);
    }

    @keyframes myAnim {
      0% {
        animation-timing-function: ease;
        opacity: 1;
        transform: translateY(-15px);
      }
    }
  }
`;
