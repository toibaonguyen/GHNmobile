// reducer.js

import { setChecklogin,SET_CHECKLOGIN } from './actions'

const initialState = {
  check: 0,
};
const initialUserState = {
  check: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKLOGIN:
      return {
        ...state,
        check: action.payload
      };
    default:
      return state;
  }
};

const UserReducer=(state = initialState, action)=>{
  switch (action.type) {
    case SET_CHECKLOGIN:
      return {
        ...state,
        check: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
