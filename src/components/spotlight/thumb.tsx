import React from "react";
import * as S from "./styles/thumb";

const Thumb: React.FC = (props, state) => {
  return <S.StyledThumb {...props}>{state.valueNow}</S.StyledThumb>;
};

export default Thumb;
