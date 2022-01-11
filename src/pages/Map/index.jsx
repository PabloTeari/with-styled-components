import React, { useState } from "react";

import Sidebar from "../../components/Sidebar";
import Ash from "../../components/Ash";
import CardPokemon from "../../components/CardPokemon";
import { useSelector } from "react-redux";

import * as S from "./styled";

function MapPage() {
  const pokemonFound = useSelector((state) => state.pokemonFound);
  const [showCardPokemon, setShowCardPokemon] = useState(false);

  return (
    <S.MapWrapper className="/map">
      <S.AshWrapper>
        <Ash />
      </S.AshWrapper>
      <Sidebar />
      <CardPokemon
        show={showCardPokemon}
        pokemon={pokemonFound}
        onClickClose={() => setShowCardPokemon(false)}
      />
    </S.MapWrapper>
  );
}

export default MapPage;
