import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { reduxReducers } from "@/pages/Redux/flow/reduxReducers";
import { globalReducers } from "./reducers";

const composeEnhancers = (window as any) && (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const reducer = combineReducers({
  global: globalReducers,
  reduxPage: reduxReducers,
});

export const configureStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);
