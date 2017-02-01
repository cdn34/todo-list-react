const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: String,
    todos: [{
        text: String
    }]
});


listSchema.methods.addList = function() {
    return new Promise( (resolve, reject) => {
        this.save( (err, doc) => {
            if(err) reject(err);
            resolve(doc);
        });  
    });
};

listSchema.statics.removeList = function(listId) {
    const queryList = { '_id': listId };
    return new Promise( (resolve, reject) => {
        this.findByIdAndRemove(queryList, (err, doc) => {
            if(err) reject(err);
            resolve(doc);
        });
    });
};

listSchema.statics.getAllLists = function() {
    return new Promise( (resolve, reject) => {
        this.find({}, (err, doc) => {
            if(err) reject(err);
            resolve(doc);
        });
    });
};

listSchema.statics.addTodoItem = function(listId, todo) {
    const queryList = { '_id': listId };
    return new Promise( (resolve, reject) => {
        this.findOneAndUpdate(queryList, {$push: {"todos": todo }},{new: true}, (err, doc) => {
            if (err) reject(err);
            resolve(doc);
        });
    });
};

listSchema.statics.removeTodoItem = function(listId, todoId) {
    const queryList = { '_id': listId };
    const queryTodo = { '_id': todoId };
    return new Promise( (resolve, reject) => {
        this.update(queryList, {$pull: { "todos" : queryTodo }}, (err, doc) => {
            if (err) reject(err);
            resolve(doc);
        });
    });
};

mongoose.model('List', listSchema);