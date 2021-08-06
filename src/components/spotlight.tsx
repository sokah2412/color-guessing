import React from "react";
import SpotLightHeadEmpty from "../assets/spotlightHeadEmpty";
import SpotLightHeadFilled from "../assets/spotlightHeadFilled";
import Trail from "../assets/trail";

const SpotLight: React.FC = () => {
  return (
    <>
      <Trail />
      <SpotLightHeadEmpty />
      <SpotLightHeadFilled />
    </>
  );
};

export default SpotLight;
