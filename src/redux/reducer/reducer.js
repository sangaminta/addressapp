import * as actionType from '../action/actionType'


const initialState = {
    userDetail:''
}; 

export const UserListReducer = (state = initialState , action)=> {
    switch (action.type)
    {
        case actionType.USERS_RECEIVE_API_DATA :
        return Object.assign({},state ,{userDetail:action.payload});

        default:
        return state;
    }
} 