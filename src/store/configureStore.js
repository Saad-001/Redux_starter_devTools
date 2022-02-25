import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

export default function () {
  // creating store by vanilla redux
  // const store = createStore(
  //   reducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // );
  // return store;

  // creating store by redux_toolkit
  return configureStore({ reducer });
}
