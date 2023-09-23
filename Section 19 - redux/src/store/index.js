import { createStore } from "redux";

const initialState = {
  counter: 0,
  toggleCounter: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      toggleCounter: state.toggleCounter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      toggleCounter: state.toggleCounter,
    };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      toggleCounter: state.toggleCounter,
    };
  } else if (action.type === "toggle") {
    return {
      counter: state.counter,
      toggleCounter: !state.toggleCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
