import {LIST_DATA, ADD_LIST, REMOVE_LIST, ADD_TODO, REMOVE_TODO} from "../constants/actionTypes";
import initialState from "./initialState";


const dashboardReducer = (state = initialState.dashboard, action) => {
    switch(action.type){
        case LIST_DATA:
            return Object.assign({},state, {lists: action.lists});
        case ADD_LIST:
            const lists = state.lists.slice(0);
            lists.push(action.list);
            return Object.assign({}, state, {lists: lists});
        case REMOVE_LIST:
            const removeLists = state.lists.filter(item => item._id!=action.list._id);
            return Object.assign({}, state, {lists: removeLists});
        case ADD_TODO:
            const addTodosLists = state.lists.map(list => todoReducer(list, action));
            return Object.assign({}, state,{lists: addTodosLists});
        case REMOVE_TODO:
            const removeTodoLists = state.lists.map(list => todoReducer(list, action));
            return Object.assign({}, state,{lists: removeTodoLists});
        default:
            return state;
    }
}


const todoReducer = (state, action) => {
    switch(action.type){
        case ADD_TODO:
            if(state._id !== action.payload._id)
                return state;
            const lastTodo = action.payload.list.todos.length-1;
            //const addTodosArr = state.todos.concat([action.payload.list.todos[lastTodo]]);
            const addTodosArr = [...state.todos, action.payload.list.todos[lastTodo]];
            return {
                ...state,
                todos: addTodosArr
            }
        case REMOVE_TODO:
            if(state._id !== action.payload.listId)
                return state;
            let todoIndex = 0;
            state.todos.forEach((todo, index) => { 
                if(todo._id == action.payload.todoId)
                    todoIndex = index;
            });
            const last = state.todos.length-1;
            //const todosArr = todoIndex < last ? state.todos.slice(0,todoIndex).concat(state.todos.slice(todoIndex+1)) : state.todos.slice(0,todoIndex);
            const removeTodosArr = todoIndex < last ? [...state.todos.slice(0,todoIndex), ...state.todos.slice(todoIndex+1)] : state.todos.slice(0,todoIndex);
            return {
                ...state,
                todos: removeTodosArr
            }
    }
}

export default dashboardReducer;