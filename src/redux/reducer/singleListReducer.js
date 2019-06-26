import * as actionType from "../action/actionType";

const initialState = {
  singleUser: ""
};

const singleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USERS_AGAIN_RECEIVE_API_DATA:
      return Object.assign({}, state, { singleUser: action.payload });

    default:
      return state;
  }
};

export default singleListReducer;
