const redux = require('redux');

// Reducer inputs: Old state + dispatched action
// Reducer output: New state object
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1
  };
};

const store = redux.createStore(counterReducer);

// The subscriber is equivalent to a React component; it subscribes to the store and executes on any changes
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
