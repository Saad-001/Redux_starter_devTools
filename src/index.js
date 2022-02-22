import { BugAdded, BugResolved } from "./actions";
import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(BugAdded("bug 1"));
store.dispatch(BugAdded("bug 2"));
store.dispatch(BugAdded("bug 3"));
store.dispatch(BugAdded("bug 4"));

const findId = store.getState();
store.dispatch(BugResolved(1));

// console.log(store.getState());
