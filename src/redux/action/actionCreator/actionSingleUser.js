import { usersAgainReceiveApiData } from "../action";
import { put } from "redux-saga/effects";
import axios from "axios";

export function* usersAgainRequestApiData(action) {
  try {
    const response = yield axios
      .get(`https://randomuser.me/api/?results=1000`)
      .then(response => {
        return response;
      });
    if (response) {
      yield put(usersAgainReceiveApiData(response.data));
    }
  } catch (e) {
    yield;
  }
}

export default usersAgainRequestApiData;
