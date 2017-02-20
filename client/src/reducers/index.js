// Set up your root reducer here...
 import { combineReducers } from 'redux';
 //import dashboard from './dashboardReducer';
 import list from './listReducer';
 import todo from './todoReducer';
 import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    list,
    todo,
    routing: routerReducer
});

export default rootReducer;