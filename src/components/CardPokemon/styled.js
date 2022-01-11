import styled from "styled-components";
import buttonClose from "assets/images/close.png";
import pokeball from "assets/images/pokeball.png";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Ability = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.5);
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const SpritePokemon = styled.img`
  height: 15vh;
  width: 11vh;
  background-size: cover;
  border-radius: 80px;
`;

export const ButtonClose = styled.div`
  height: 4vh;
  width: 4vh;
  border-radius: 80px;
  border: 2px solid grey;
  background-image: url(${buttonClose});
  background-color: white;
  position: absolute;
  background-size: 2vh;
  background-repeat: no-repeat;
  background-position: center;
  align-self: end;
  top: 0;
  right: 0;
  margin: 1vh;
`;

export const Pokeball = styled.div`
  height: 42vh;
  width: 50vw;
  background-image: url(${pokeball});
  background-size: 13vh;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  bottom: 5vh;
`;

export const Circle = styled.div`
  display: flex;
  height: 28vh;
  width: 28vh;
  background-size: cover;
  background: white;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  border: 3px solid #48d68e;
`;

export const Modal = styled.div`
  display: flex;
  background: linear-gradient(to right, #4fe97c 0%, #57f9d5 100%);
  margin-top: 30vh;
  top: 40px;
  height: 60vh;
  width: 40vh;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 10px;
`;

export const Panel = styled.div`
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Scroll = styled.div`
  overflow-y: scroll;
  height: 60vh;
  width: 40vh;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    border: 1px solid black;
  }
`;

export const Name = styled.h1`
  margin: 23px;
  font-size: 3vh;
  text-align: center;
  color: black;
  font-weight: bold;
  font-family: sans-serif;
`;

export const Line = styled.hr`
  border-top: 1px solid red;
  color: darkGrey;
  transform: rotate(90deg);
  width: 30px;
`;
