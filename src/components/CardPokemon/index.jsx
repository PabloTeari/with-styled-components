import React from "react";

import ashFront from "assets/images/ashFront.png";

import * as S from "./styled";

const CardPokemon = ({ show, onClickClose }) => (
  <S.Container show={show}>
    <S.Modal>
      <S.Scroll>
        <S.Body>
          <S.ButtonClose onClick={onClickClose} />

          <S.Circle>
            <S.SpritePokemon src={ashFront} />
          </S.Circle>

          <S.Pokeball />
        </S.Body>
      </S.Scroll>
    </S.Modal>
  </S.Container>
);

export default CardPokemon;
