import { createAction, createReducer } from "@reduxjs/toolkit";

// the code in the below are the vanilla redux actionTypes variable and action creator function

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

export const BugAdded = createAction("bugAdded");
export const BugResolved = createAction("bugResolved");
export const BugRemoved = createAction("bugRemoved");

// end of the creating actions by utility function

let lastId = 0;

// reducer function using redux toolkit
export default createReducer([], {
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
});

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
