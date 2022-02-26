import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

// the codes below are the vanilla redux action types variable and action creator function

// const BUG_ADDED = "BugAdded";
// const BUG_REMOVED = "BugRemoved";
// const BUG_RESOLVED = "BugResolved";

// export const BugAdded = (description) => ({
//   type: BUG_ADDED,
//   payload: {
//     description: description,
//   },
// });

// export const BugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id: id,
//   },
// });

// start creating actions using the utility function provided by redux toolkit

// export const BugAdded = createAction("bugAdded");
// export const BugResolved = createAction("bugResolved");
// export const BugRemoved = createAction("bugRemoved");

// end of the creating actions by utility function

// creating action types, actions and reducer function by a single function called createSlice utility function provided by redux toolkit
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },
  },
});
export const getUnresolvedBugs = (state) =>
  state.entities.bugs.filter((bug) => !bug.resolved);

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;

// creating reducer function using createReducer utility function by redux toolkit

// export default createReducer([], {
//   [BugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },
//   [BugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
//   [BugRemoved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs.splice(index, 1);
//   },
// });

// plain reducer function
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case BugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case BugResolved.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );

//     case BugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     default:
//       return state;
//   }
// }
