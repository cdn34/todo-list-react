import * as types from '../constants/actionTypes';
import axios from 'axios';

export function listData() {
    return function (dispatch) {
        axios.get('api/getAllLists').then(result => {
            return dispatch({
                type: types.LIST_DATA,
                lists: result
            });
        }).catch(err => {
            console.log(err);
        })
    }
}