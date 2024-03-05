const redux = require("redux");
// const  logger = require('redux-logger');

const createstore = redux.legacy_createStore;
const colors = require("colors");
console.log("From index.js");

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";
function buy_cake() {
  return {
    type: BUY_CAKE,
    info: "First redux Action",
  };
}

function buy_ice_cream() {
  return {
    type: BUY_ICE_CREAM,
    info: "Second redux Action",
  };
}

const intialstate1 = {
  numofcakes: 10,
};
const intialstate2 = {
  ice_cream: 20,
};

const cakereducer = (state = intialstate1, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofcakes: state.numofcakes - 1,
      };

    default:
      return state;
  }
};
const iceCreamreducer = (state = intialstate2, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        ice_cream: state.ice_cream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: cakereducer,
  iceCream: iceCreamreducer,
});

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("dispatching", action);
  let result = next(action);
  console.log("Next state", store.getState());
  console.groupEnd();
  return result;
};

const store = createstore(rootReducer, redux.applyMiddleware(logger));
// const store = createstore(rootReducer, redux.applyMiddleware(logger.createLogger()));
console.log("Intial State".bgBlue, store.getState());
// store.subscribe(()=> console.log('Update state '.bgGreen ,store.getState()));

store.dispatch(buy_cake());
store.dispatch(buy_ice_cream());
store.dispatch(buy_cake());
store.dispatch(buy_ice_cream());
store.dispatch(buy_cake());
store.dispatch(buy_ice_cream());
store.dispatch(buy_ice_cream());


