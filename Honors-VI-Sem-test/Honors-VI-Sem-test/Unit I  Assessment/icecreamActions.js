import React from "react";
import { BUY_ICECREAM } from "./icecreamTypes";

const buyicecream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
  };
};

export default buyicecream;
