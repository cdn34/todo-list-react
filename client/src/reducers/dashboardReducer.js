import {LIST_DATA, ADD_LIST, REMOVE_LIST, ADD_TODO, REMOVE_TODO} from "../constants/actionTypes";
import initialState from "./initialState";


const dashboardReducer = (state = initialState.dashboard, action) => {
    switch(action.type){
        case LIST_DATA:
            console.log(action.lists);
            return Object.assign({},state,{lists: action.lists});
        case ADD_LIST:
            return Object.assign({},state);
        case REMOVE_LIST:
            return Object.assign({},state);
        case ADD_TODO:
            return Object.assign({},state);
        case REMOVE_TODO:
            return Object.assign({},state);
        
        default:
            return state;
    }
}

export default dashboardReducer;