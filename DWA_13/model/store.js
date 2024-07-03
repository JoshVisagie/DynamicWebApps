/**
 *
 * @param {Function} reducer- the reducer function to manage the state changes
 * @returns {Object}- the store with `getState`, `dispatch` and ` subsribe methods`
 */
export const createStore = (reducer) => {
  let state;
  let listeners =[];
  /**
   * gets the current state
   * @returns {Object} the current state
   */
  const getState = () => state;
  /**
   * dispatches an action to change the state
   * @param {Object} action- the action to be dispatched
   */
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
    
  };

/**
   * Subscribes a listener function that will be called whenever the state changes.
   * @param {Function} listener - The listener function.
   * @returns {Function} A function to unsubscribe the listener.
   */
const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      unsubscribe(listener);
    };
  };

  /**
   * Unsubscribes a listener function.
   * @param {Function} listener - The function that is to be removed from listeners.
   */
  const unsubscribe = (listener) => {
    listeners = listeners.filter((arrayOfListeners) => arrayOfListeners !== listener);
  };
dispatch({});

return {
    getState,
    dispatch,
    subscribe,
    unsubscribe
};
};