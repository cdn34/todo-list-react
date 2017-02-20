import * as types from '../constants/actionTypes';
import axios from 'axios';
import {normalize} from 'normalizr';
import * as schema from './schema';

export function listData() {
    return function (dispatch) {
        axios.get('api/getAllLists').then(result => {
            console.log(result.data);
            console.log(
                'normalized response',
                normalize(result.data, [schema.list])
            );
            return dispatch({
                type: types.SET_DATA,
                payload: normalize(result.data, [schema.list])//result.data
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
                payload: result.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export function removeList(listId) {
    return function (dispatch) {
        axios.delete('api/removeList?listId='+listId).then(result => {
            console.log("Data:",result.data);
            console.log("Data Normalized:",normalize(result.data, schema.list));
            return dispatch({
                type: types.REMOVE_LIST,
                payload: normalize(result.data, schema.list)
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
                payload: normalize(result.data, schema.list)
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export function removeTodo(listId, todoId) {
    return function (dispatch) {
        axios.delete('api/removeTodo?listId='+listId+'&todoId='+todoId).then(result => {
            return dispatch({
                type: types.REMOVE_TODO,
                payload: {listId: listId ,todoId: todoId}
            });
        }).catch(err => {
            console.log(err);
        })
    }
}