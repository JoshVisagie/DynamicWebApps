import { createStore } from "./store.js";
import { reducer } from "./reducer.js";
import { ADD, SUBTRACT, RESET } from "./actions.js";

// Create the store using the reducer
const store = createStore(reducer);

/**
 * Listener function to log the new state to the console whenever it changes.
 */
const logState = () => {
  console.log(store.getState());
};

// Subscribe the listener to state changes.
store.subscribe(logState);



// Dispatch some actions to see the state changes.

store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
store.dispatch({ type: SUBTRACT });
store.dispatch({ type: RESET });

// Unsubscribe the listener.
store.unsubscribe(logState);
try {
  store.unsubscribe(()=>'banana');
} catch (error) {
  console.log(error)
}
console.log('h')