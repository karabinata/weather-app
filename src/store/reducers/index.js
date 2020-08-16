import { combineReducers } from 'redux';
import weatherDataReducer from './weatherDataReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
    weatherDataReducer,
    locationReducer
});

export default rootReducer;
