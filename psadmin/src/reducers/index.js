import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses         //ES6 Object short hand notation
});

export default rootReducer;