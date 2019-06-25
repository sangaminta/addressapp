import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../rootSaga';
import {UserListReducer} from "../reducer/reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(UserListReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
