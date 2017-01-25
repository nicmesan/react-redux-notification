import { combineReducers } from 'redux';
import { notificationsReducer } from '../src'

const rootReducer = combineReducers({
    notificationsReducer,
});

export default rootReducer;