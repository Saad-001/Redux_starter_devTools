import * as actions from "./actionTypes";

export const BugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

export const BugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id,
  },
});
