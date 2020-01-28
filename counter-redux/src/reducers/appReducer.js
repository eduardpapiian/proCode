import {HANDLE_INC, HANDLE_DEC} from "../actions/actionTypes";

const initialState = {
  count: 10
};

export default function(state = initialState, action){
  console.log('action', action)
  switch (action.type) {
    case HANDLE_INC:
      return {
        count: state.count + 1
      };
    case HANDLE_DEC:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
