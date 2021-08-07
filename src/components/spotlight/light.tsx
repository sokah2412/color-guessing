import React from "react";
import { Layer, Line } from "react-konva";

import * as S from "./styles/light";

interface LightProps {
  smallSideLength: number;
  largeSideLength: number;
  height: number;
  color: string;
}

const Light: React.FC<LightProps> = ({
  smallSideLength,
  largeSideLength,
  height,
  color,
}) => {
  const [p1, p2, p3, p4] = [
    { x: largeSideLength / 2 - smallSideLength / 2, y: 0 },
    { x: largeSideLength / 2 + smallSideLength / 2, y: 0 },
    { x: largeSideLength, y: height },
    { x: 0, y: height },
  ];

  return (
    <S.StyledStage width={largeSideLength} height={height}>
      <Layer>
        <Line
          closed
          points={[p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y]}
          fill={color}
        />
      </Layer>
    </S.StyledStage>
  );
};

export default Light;
