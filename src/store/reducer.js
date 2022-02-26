import { combineReducers } from "redux";
import subReducers from "./entities";

const mainReducer = combineReducers({
  entities: subReducers,
});

export default mainReducer;
