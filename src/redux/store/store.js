import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { historyReducer } from "../reducers/history";
import { addressReducer } from "../reducers/address";
import { createStore , applyMiddleware  } from "redux";
import { loginReducer } from "../reducers/login";
const store = createStore(combineReducers({ 
    historyReducer,
    addressReducer,
    loginReducer
 }) , applyMiddleware(thunk));

export default store;