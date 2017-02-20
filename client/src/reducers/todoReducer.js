import {SET_DATA, REMOVE_LIST, ADD_TODO, REMOVE_TODO} from "../constants/actionTypes";

const listReducer = (state = {}, action) => {

    switch(action.type){
        case SET_DATA:
            return {...state, ...action.payload.entities.todos};
        case REMOVE_LIST:
            if(!action.payload.entities.todos)
                return {...state};
            
            const todoKeys = Object.keys(action.payload.entities.todos);
            const newState = {};
            Object.keys(state).forEach( key => todoKeys.indexOf(key) === -1 ? newState[key] = state[key] : null);

            return {...newState};
        case ADD_TODO:
            const addTodoKey = Object.keys(action.payload.entities.todos).slice(-1);
            return {...state, [addTodoKey]: action.payload.entities.todos[addTodoKey]};
        case REMOVE_TODO:
            const removeTodoState = {};
            Object.keys(state).forEach( key => key !== action.payload.todoId ? removeTodoState[key] = state[key] : null);
            return {...removeTodoState};
        default:
            return state;
    }

}

export default listReducer;