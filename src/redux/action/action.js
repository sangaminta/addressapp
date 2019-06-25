import * as actionType from './actionType';

export function usersRequestApiData() {
    return { type: actionType.USERS_REQUEST_API_DATA };
  }
  
  export function usersReceiveApiData(payload) {
    return { type: actionType.USERS_RECEIVE_API_DATA, payload };
  }