import styled from "styled-components";
import img from "assets/images/pageBackground.png";

export const Container = styled.div`
  background: linear-gradient(to right, #4fe97c 0%, #57f9d5 100%);
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonStart = styled.div`
  margin-top: 25px;
`;

export const LogoImage = styled.div`
  background-image: url(${img});
`;
