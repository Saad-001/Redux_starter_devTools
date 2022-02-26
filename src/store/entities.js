import { combineReducers } from "@reduxjs/toolkit";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";

const subReducers = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});

export default subReducers;
