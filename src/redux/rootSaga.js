import {takeLatest} from "redux-saga/effects";
import  {usersRequestApiData} from '../redux/action/actionCreator'

export default function* rootSaga() {
    yield takeLatest("USERS_REQUEST_API_DATA", usersRequestApiData);
  }