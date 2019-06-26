import * as actionType from "../action/actionType";

const initialState = {
  userDetail: "",
  show:false,
  user:'',
  count:50,
  isLoading:false
};

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USERS_REQUEST_API_DATA:
    return Object.assign({}, state,{isLoading:true})
    case actionType.USERS_RECEIVE_API_DATA:
      return Object.assign({}, state, {isLoading:false ,userDetail: action.payload });
    
    case actionType.MODAL_OPEN:
    return Object.assign({}, state, {show: true, user:action.payload} )  

    case actionType.MODAL_CLOSE:
    return Object.assign({}, state, {show:false,user:''})
    case actionType.SHOW_NEXT:
    return Object.assign({}, state,{count:action.payload})

    default:
      return state;
  }
};
