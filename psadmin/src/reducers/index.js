import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,         //ES6 Object short hand notation
    authors
});

export default rootReducer;