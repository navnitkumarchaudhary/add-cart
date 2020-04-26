import { createStore, combineReducers } from 'redux';
import cart from './reducer';

const rootReducer = combineReducers({cart});
const store = createStore(rootReducer);

export default store;