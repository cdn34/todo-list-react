import {SET_DATA, ADD_LIST, REMOVE_LIST, ADD_TODO, REMOVE_TODO} from "../constants/actionTypes";

const listReducer = (state = {}, action) => {

    switch(action.type){
        case SET_DATA:
            return {
                ...state, 
                lists: {...action.payload.entities.lists}, 
                listArray: [...action.payload.result]
            };
        case ADD_LIST:
            return {
                ...state, 
                lists: {...state.lists, [action.payload._id]:action.payload},
                listArray: [...state.listArray, action.payload._id]
            };
        case REMOVE_LIST:
            const removeList = {};
            const removeListArray = state.listArray.filter(key => key !== action.payload.result );
            Object.keys(state.lists).forEach(key => key !== action.payload.result ? removeList[key] = state.lists[key] : null );
            return {
                ...state, 
                lists: removeList,
                listArray: removeListArray
            };
        case ADD_TODO:
            const todoLists = {};
            Object.keys(state.lists).forEach(key => {
                todoLists[key] = {...state.lists[key]}; 
                if(key === action.payload.result) 
                    todoLists[key].todos = [...action.payload.entities.lists[key].todos];
            });
            return {
                ...state, 
                lists: todoLists
            };
        case REMOVE_TODO:
            const removeTodoLists = {};
            let todoIndex = null;
            Object.keys(state.lists).forEach((key) => {
                removeTodoLists[key] = {...state.lists[key]}; 
                if(key === action.payload.listId) {
                    removeTodoLists[key].todos.forEach( (todoKey, index) => todoKey === action.payload.todoId ? todoIndex = index : null );
                    if(todoIndex)
                        removeTodoLists[key].todos = [...removeTodoLists[key].todos.slice(0,todoIndex), ...removeTodoLists[key].todos.slice(todoIndex+1)];
                }
            });
            console.log(" removeTodoLists[key]: ", removeTodoLists);
            return {
                ...state, 
                lists: removeTodoLists
            };
        default:
            return state;
    }

}

export default listReducer;