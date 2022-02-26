import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./store/bugs";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";

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

const unResolvedBugs = getUnresolvedBugs(store.getState());
console.log(unResolvedBugs);

// exercise
store.dispatch(projectAdded({ name: "project one" }));
