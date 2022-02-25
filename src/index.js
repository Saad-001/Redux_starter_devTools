import { BugAdded, BugRemoved, BugResolved } from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(BugAdded({ description: "bug 1" }));
store.dispatch(BugAdded({ description: "bug 2" }));
store.dispatch(BugAdded({ description: "bug 3" }));
store.dispatch(BugAdded({ description: "bug 4" }));
store.dispatch(BugRemoved({ id: 2 }));
store.dispatch(BugResolved({ id: 3 }));
