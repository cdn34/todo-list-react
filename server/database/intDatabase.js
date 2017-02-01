require("./models/list");
const mongoose = require('mongoose');
const ListModel = mongoose.model('List');

const addList = title => {
    const list = new ListModel();
    list.title = title;
    list.todos = [];
    return list.addList();
}

const removeList = listId => ListModel.removeList(listId);

const getAllLists = _ => ListModel.getAllLists();

const addTodoItem = (listId, todo) => ListModel.addTodoItem(listId, todo);

const removeTodoItem = (listId, todoId) => ListModel.removeTodoItem(listId, todoId);

module.exports = {
    addList,
    removeList,
    getAllLists,
    addTodoItem,
    removeTodoItem
}