import React from "react";

import * as S from "./styled";

const Button = ({ text, icon, onClick, onlyIcon }) => (
  <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
    {icon ? <S.Icon src={icon} /> : text}
  </S.ButtonWrapper>
);

export default Button;
