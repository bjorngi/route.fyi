import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { stops } from './stops';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
  stops,
});

export default rootReducer;
