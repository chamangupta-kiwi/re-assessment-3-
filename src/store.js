import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import studentReducer from "./services/reducer";
const rootReducer = combineReducers({
  studentReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
//console.log(store, "ghfjjcfhjj")

export default store;
