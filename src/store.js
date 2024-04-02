// src/store.js

import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from './redux/reducers'
const reducer = combineReducers({
   Task :  taskReducer
})
const initialState = {};

const middleware = [thunk];


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;