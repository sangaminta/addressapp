import { takeLatest } from "redux-saga/effects";
import { usersRequestApiData } from "../redux/action/actionCreator/actionUserDetail";
import { usersAgainRequestApiData } from "../redux/action/actionCreator/actionSingleUser";

export default function* rootSaga() {
  yield takeLatest("USERS_REQUEST_API_DATA", usersRequestApiData);
  yield takeLatest("USERS_AGAIN_REQUEST_API_DATA", usersAgainRequestApiData);
}
