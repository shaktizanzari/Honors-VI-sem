// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { buyCake } from "./cake/cakeActions";

// function CakeContainer(props) {
//     const [number,setNumber] = useState(1)
//     const numOfCakes = useSelector(state => state.cake.numOfCakes)
//     const dispatch = useDispatch();
//   return (
//     <div>
//         <h2>Number of Cakes - {numOfCakes}</h2>
//         <input type='text' value={number} onChange={e=> setNumber(e.target.value)}></input>
//         <button onClick = {()=> dispatch(buyCake(number))}>Buy {number} Cake</button>

//     </div>
//   )
// }

// export default CakeContainer;

import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./cake/cakeActions";
import { useState } from "react";

function CakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
