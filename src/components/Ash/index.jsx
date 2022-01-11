import React, { useState } from "react";
import { searchPokemon } from "../../states/actions/pokemon";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styled";
import Tooltip from "../Tooltip";

function Ash() {
  const dispatch = useDispatch();

  const [showTooltip, setShowTooltip] = useState(false);

  const searching = useSelector((state) => state.searching);
  const tooltip_type = useSelector((state) => state.tooltip_type);

  return (
    <>
      <Tooltip show={showTooltip} type={tooltip_type} />
      <S.Ash
        onClick={() => dispatch(searchPokemon())}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        running={searching}
      ></S.Ash>
    </>
  );
}

export default Ash;
