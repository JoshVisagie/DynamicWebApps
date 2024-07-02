import { ADD, SUBTRACT, RESET } from "./actions.js";

//initial state of app
const initialState = {
  count: 0,
};
/**
 * The reducer function manages the state based on the actions
 *
 * @param {object} state -the current state
 * @param {object} action - the action being dispached
 * @returns {object} - The new state
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count + 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};
