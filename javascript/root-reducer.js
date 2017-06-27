import { combineReducers } from 'redux';

function dummyReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dummyReducer,
});

export default rootReducer;
