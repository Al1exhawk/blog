import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import postRedeucer from "./reducers/postRedeucer";

const store = createStore(
  postRedeucer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
