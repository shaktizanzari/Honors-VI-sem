// const redux = require("redux");
// const axios = require("axios");

// const colors = require("colors");
// const thunk = require("redux-thunk");
// const createstore = redux.legacy_createStore;

// // const createstore = redux.legacy_createStore;
// const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
// const FETCH_USER_SUCESS = "FETCH_USER_SUCESS";
// const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// intialstate = {
//   loading: false,
//   user: [],
//   error: "",
// };

// function Fetch_user_Request() {
//   return {
//     type: FETCH_USER_REQUEST,
//   };
// }
// function Fetch_user_sucess(users) {
//   return {
//     type: FETCH_USER_SUCESS,
//     payload: users,
//   };
// }
// function Fetch_user_failure(error) {
//   return {
//     type: FETCH_USER_FAILURE,
//   };
// }

// const reducer = (state = intialstate, action) => {
//   switch (action.type) {
//     case FETCH_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_USER_SUCESS:
//       return {
//         loading: false,
//         user: action.payload,
//         error: "",
//       };
//     case FETCH_USER_FAILURE:
//       return {
//         loading: false,
//         users: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const fetchuser = () => {
//   return function (dispatch) {
//     dispatch(Fetch_user_Request());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const users = response.data.map((user) => user.id);
//         dispatch(Fetch_user_sucess);
//       })
//       .catch((error) => {
//         dispatch(Fetch_user_failure(error.message));
//       });
//   };
// };

// const store = createstore(reducer, redux.applyMiddleware(thunk));
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(fetchuser());

const redux = require("redux");
const axios = require("axios");
const colors = require("colors");
const { thunk } = require("redux-thunk");
const createstore = redux.legacy_createStore;

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"; // Correct action type
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchuser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const store = createstore(reducer, redux.applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchuser());
