import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       toggleCounter: state.toggleCounter,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       toggleCounter: state.toggleCounter,
//     };
//   } else if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       toggleCounter: state.toggleCounter,
//     };
//   } else if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       toggleCounter: !state.toggleCounter,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
