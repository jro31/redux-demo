const redux = require('redux');

// Reducer inputs: Old state + dispatched action
// Reducer output: New state object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// The subscriber is equivalent to a React component; it subscribes to the store and executes on any changes
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' })

// Output
// ➜  redux-demo git:(master) ✗ node redux-demo.js
// { counter: 1 }
// { counter: 0 }
