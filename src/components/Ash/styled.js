import styled, { keyframes } from "styled-components";

import ashFront from "assets/images/ashFront.png";
import ashLeftLeg from "assets/images/ashLeftLeg.png";
import ashRightLeg from "assets/images/ashRightLeg.png";
import ashStop from "assets/images/ashStop.png";

export const AshClickSearch = styled.img`
  height: 15vh;
  width: 15vh;
`;

const animation = (props) =>
  props.running &&
  keyframes`
    0% {background-image: url(${ashFront});}
    25% {background-image: url(${ashLeftLeg})}
    35% {background-image: url(${ashRightLeg})}
    45% {background-image: url(${ashStop})}
    65% {background-image: url(${ashLeftLeg})}
    75% {background-image: url(${ashRightLeg})}
    90% {background-image: url(${ashStop})}
    100% {background-image: url(${ashFront})}

`;

export const Ash = styled.div`
  height: 15vh;
  width: 15vh;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 8vh;
  background-position: center;
  background-image: url(${ashFront});
  animation: ${animation} 2.3s 0s ease forwards;
`;
