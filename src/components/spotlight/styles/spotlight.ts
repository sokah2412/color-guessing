import ReactSlider from "react-slider";
import styled from "styled-components";

export const StyledSlider = styled(ReactSlider)`
  height: 100%;
  width: 25px;
`;

export const StyledContainer = styled.div<{ width: number; angle: number }>`
  position: absolute;
  top: 200px;
  left: 700px;
  height: ${(props) => `${props.width}px`};
  transform: ${(props) => `rotate(${props.angle}deg)`};
`;

export const LightContainer = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
`;
