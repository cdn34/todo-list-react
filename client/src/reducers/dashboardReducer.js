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
            const addTodosLists = state.lists.map(list => {
                if(list._id !== action.payload._id)
                    return list;
                const last = action.payload.list.todos.length-1;
                const todosArr = list.todos.concat([action.payload.list.todos[last]]);
                return {
                    ...list,
                    todos: todosArr
                }
            });
            return Object.assign({}, state,{lists: addTodosLists});
        case REMOVE_TODO:
            const removeTodoLists = state.lists.map(list => {
                if(list._id !== action.payload.listId)
                    return list;
                let todoIndex = 0;
                list.todos.forEach((todo, index) => { 
                    if(todo._id == action.payload.todoId)
                        todoIndex = index;
                });
                const last = list.todos.length-1;
                //const todosArr = todoIndex < last ? list.todos.slice(0,todoIndex).concat(list.todos.slice(todoIndex+1)) : list.todos.slice(0,todoIndex);
                const todosArr = todoIndex < last ? [...list.todos.slice(0,todoIndex), ...list.todos.slice(todoIndex+1)] : list.todos.slice(0,todoIndex);
                return {
                    ...list,
                    todos: todosArr
                }
            })
            return Object.assign({}, state,{lists: removeTodoLists});
        
        default:
            return state;
    }
}

export default dashboardReducer;