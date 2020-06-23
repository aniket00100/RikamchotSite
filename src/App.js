import React from "react";

import MenuBar from "./Components/menu/menuBar";
import TagLine from "./Components/tagLine/tagLine";
import Intro from "./Components/intro/intro";
import SpecialPowers from "./Components/specialPowers/specialPowers";

const app = () => {
  return (
    <div>
      <MenuBar />
      <TagLine />
      <Intro />
      <SpecialPowers />
    </div>
  );
};

export default app;
