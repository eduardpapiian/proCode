import {GET_COUNT, HANDLE_INCR} from "../actions/actionTypes";

const initialState = {
  count: 0
};

export default function(state = initialState, action){
  switch (action.type) {
    case HANDLE_INCR:
      return state;
    default:
      return state;
  }
}
