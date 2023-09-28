import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  toggleCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = action.payload + state.counter;
    },
    toggleCounter(state) {
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

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

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
