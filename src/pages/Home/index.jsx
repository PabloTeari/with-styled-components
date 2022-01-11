import React from "react";

import * as S from "./styled";
import img from "assets/images/pokemonLogo.png";
import Button from "components/Button";
import Image from "components/Image";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  const routeStartGame = () => {
    let path = `map`;
    history.push(path);
  };

  return (
    <S.Container>
      <Image src={img} />
      <S.ButtonStart>
        <Button text={"START"} onClick={routeStartGame} />
      </S.ButtonStart>
    </S.Container>
  );
}

export default HomePage;
