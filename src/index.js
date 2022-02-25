import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(bugAdded({ description: "bug 1" }));
store.dispatch(bugAdded({ description: "bug 2" }));
store.dispatch(bugAdded({ description: "bug 3" }));
store.dispatch(bugAdded({ description: "bug 4" }));
store.dispatch(bugRemoved({ id: 2 }));
store.dispatch(bugResolved({ id: 3 }));
