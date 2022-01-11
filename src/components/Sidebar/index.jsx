import React from "react";
import Button from "../../components/Button";
import iconPlus from "assets/images/plus.png";
import { useSelector } from "react-redux";

import Image from "../Image";

import * as S from "./styled";

function Sidebar() {
  const pokemonsCaptured = useSelector((state) => state.pokemons);
  const limitPokemon = 6;
  const canAddMorePokemon = pokemonsCaptured.length < limitPokemon;
  const sideBarItems = [];

  for (var i = 0; i < limitPokemon; i++) {
    const img = pokemonsCaptured[i] ? (
      <Image src={pokemonsCaptured[i].sprite} />
    ) : (
      "?"
    );

    sideBarItems.push(<S.SideBarItem key={i}>{img}</S.SideBarItem>);
  }

  return (
    <S.SideBarWrapper>
      <S.SideBarList>{sideBarItems}</S.SideBarList>
      {canAddMorePokemon && <Button icon={iconPlus} />}
    </S.SideBarWrapper>
  );
}

export default Sidebar;
