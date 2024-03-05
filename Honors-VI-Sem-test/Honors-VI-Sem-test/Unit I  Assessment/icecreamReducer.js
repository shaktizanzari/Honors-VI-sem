import React from "react";
import { BUY_ICECREAM } from "./icecreamTypes";

const intialstate = {
  numOficecream: 20,
};

const icecreamReducer = (state = intialstate, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOficecream: state.numOficecream - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
