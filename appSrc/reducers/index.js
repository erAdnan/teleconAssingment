import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import { reducer as event } from './eventReducer';
import { reducer as addName } from './addNameReducer';

export default combineReducers({
    network,
    event,
    addName
});
