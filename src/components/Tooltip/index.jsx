import React from "react";

import * as S from "./styled";
import error from "assets/images/tooltips/error.png";
import search from "assets/images/tooltips/search.png";
import searching from "assets/images/tooltips/searching.png";

function returnType(type) {
  switch (type) {
    case "search":
      return search;
    case "searching":
      return searching;
    case "error":
      return error;
    default:
      return search;
  }
}

const Tooltip = ({ show, type }) => {
  if (!show) {
    return null;
  }

  const img = returnType(type);

  return <S.Image src={img} />;
};

export default Tooltip;
