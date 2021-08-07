import React, { useMemo, useState } from "react";
import Thumb from "./thumb";
import Track from "./track";
import Light from "./light";

import * as S from "./styles/spotlight";
import { alphaToHexacolor } from "../../utils/color";

interface SpotLightProps {
  width: number;
  height: number;
  angle: number;
}

const SpotLight: React.FC<SpotLightProps> = ({ width, height, angle }) => {
  const [value, setValue] = useState<number | readonly number[]>(50);

  const thumbValue = useMemo(() => {
    return typeof value === "number" ? value : 0;
  }, [value]);
  const startLight = useMemo(() => {
    return (thumbValue / 100) * width;
  }, [thumbValue, width]);

  return (
    <S.StyledContainer width={width} angle={angle}>
      <S.LightContainer x={-138} y={startLight}>
        <Light
          smallSideLength={50}
          largeSideLength={height}
          height={width - startLight + 50}
          color={alphaToHexacolor("red", thumbValue)}
        />
      </S.LightContainer>
      <S.StyledSlider
        renderTrack={Track}
        renderThumb={Thumb}
        value={value}
        onChange={setValue}
        orientation="vertical"
      />
    </S.StyledContainer>
  );
};

export default SpotLight;
