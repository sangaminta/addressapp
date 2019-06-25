import {usersReceiveApiData} from './action';
import { put } from "redux-saga/effects";
import axios from "axios";

export function* usersRequestApiData(action) {
    try {
      const response = yield axios
        .get(
          `https://randomuser.me/api/?results=1000`
        )
        .then(response => {
          return response;
        });
      if (response) {
        yield put(usersReceiveApiData(response.data));
      }
    } catch (e) {
      yield;
    }
  }

export default  usersRequestApiData; 
