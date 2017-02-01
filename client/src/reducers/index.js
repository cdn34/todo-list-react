// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import dashboard from './dashboardReducer';
 import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    dashboard,
    routing: routerReducer
});

export default rootReducer;