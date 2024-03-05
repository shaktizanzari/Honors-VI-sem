// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import buyicecream from "./icecream/icecreamActions";

// function IcecreamContainer(props) {
//   const numOfCakes = useSelector((state) => state.icecream.numOfCakes);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h2>Number of Cakes - {state.icecream.numOficecream}</h2>
//       <button onClick={() => dispatch(buyicecream(1))}>Buy Icecream</button>
//     </div>
//   );
// }

// export default IcecreamContainer;

import React from "react";
import { connect } from "react-redux";
import buyicecream from "./icecream/icecreamActions";

function IcecreamContainer(props) {
  return (
    <div>
      <h2>Number of Icecream - {props.numOficecream}</h2>

      <button onClick={() => props.buyicecream(1)}>Buy icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOficecream: state.icecream.numOficecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyicecream: (number) => dispatch(buyicecream(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
