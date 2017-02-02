import * as types from '../constants/actionTypes';
import axios from 'axios';

export function listData() {
    return function (dispatch) {
        axios.get('api/getAllLists').then(result => {
            return dispatch({
                type: types.LIST_DATA,
                lists: result.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export function addList(title) {
    return function (dispatch) {
        axios.post('api/addList',{'title': title}).then(result => {
            return dispatch({
                type: types.ADD_LIST,
                list: result.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export function removeList(listId) {
    return function (dispatch) {
        axios.delete('api/removeList?listId='+listId).then(result => {
            return dispatch({
                type: types.REMOVE_LIST,
                list: result.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export function addTodo(listId, todo) {
    return function (dispatch) {
        axios.post('api/addTodo',{'listId': listId, "todo": todo}).then(result => {
            return dispatch({
                type: types.ADD_TODO,
                payload: {_id: listId ,todo: result.data}
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export function removeTodo(listId, todoId) {
    return function (dispatch) {
        axios.post('api/removeTodo?listId='+listId+'&todoId='+todoId).then(result => {
            return dispatch({
                type: types.REMOVE_TODO,
                payload: {listId: listId ,todoId: todoId}
            });
        }).catch(err => {
            console.log(err);
        })
    }
}