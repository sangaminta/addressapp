import * as actionType from "./actionType";

export function usersRequestApiData() {
  return { type: actionType.USERS_REQUEST_API_DATA };
}

export function usersReceiveApiData(payload) {
  return { type: actionType.USERS_RECEIVE_API_DATA, payload };
}

export function usersAgainRequestApiData() {
  return { type: actionType.USERS_AGAIN_REQUEST_API_DATA };
}

export function usersAgainReceiveApiData(payload) {
  return { type: actionType.USERS_AGAIN_RECEIVE_API_DATA, payload };
}

export  function modalOpen (payload) {
  return { type: actionType.MODAL_OPEN, payload}
}

export  function modalClose (payload) {
  return { type: actionType.MODAL_CLOSE, payload}
}

export function showNext (payload) {
  return { type: actionType.SHOW_NEXT, payload}
}
