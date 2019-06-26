import { combineReducers } from "redux";
import { userListReducer } from "./reducer";
import singleListReducer from "./singleListReducer";

const rootReducer = combineReducers({ userListReducer, singleListReducer });

export default rootReducer;
