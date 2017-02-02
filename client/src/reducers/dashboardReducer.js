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
            // let index = 0;
            // const addTodoLists = Object.assign({}, state, {lists: });
            // addTodoLists.lists.forEach((item, i) => {
            //     if(item._id === action.payload._id)
            //         item.todos.push(action.payload.todo);
            // });
            // state.lists.forEach((item, i) => item._id === action.payload._id ? index = i : index = 0);
            // console.log(state.lists.slice(0)[index].todos.concat(action.payload.todo));
            // const addTodoLists = 
            //     state.lists
            //     .slice(0)[index].todos.concat(action.payload.todo)
            //     //.concat(state.lists.slice(0)[index].todos.concat(action.payload.todo));
            
            // console.log(addTodoLists);
            return Object.assign({}, state);
        case REMOVE_TODO:
            let listIndex = 0;
            let todoIndex = 0;

            state.lists.forEach((item, i) => {
                if(item._id === action.payload.listId) {
                    listIndex = i;
                    item.forEach((todo, j) => {
                        if(todo._id === action.payload.todoId)
                            todoIndex = j;
                    });
                }     
            });

            const removeTodoLists = 
                state.lists
                .slice(0,listIndex)
                .concat(state.lists.slice(0)[listIndex].todos.slice(0,todoIndex)
                        .concat(state.lists.slice(0)[listIndex].todos.slice(todoIndex+1))
                .concat(state.lists.slice(listIndex+1)));
            
            console.log(removeTodoLists);
            return Object.assign({}, state, {lists: removeTodoLists});
        
        default:
            return state;
    }
}

export default dashboardReducer;