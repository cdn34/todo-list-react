const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost/todo-list-app-test";

//Importing list model to unit testing.
const intDatabase = require("../database/intDatabase");
const ListModel = mongoose.model('List');
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

describe("Database testing", _ => {
  let listId = "";
  let todoId = "";
  /*beforeEach(done => ...);*/
  /*afterEach(done => ...);*/
  /*before(done => ...);*/

  after( done => {
    ListModel.remove({}, err => { console.log('Collection removed'); done()});
  });

  it("Should add a new list", done => {    
    intDatabase.addList("Test List").then(doc => {
      listId = doc._id;
      expect(doc.title).to.deep.equal("Test List");
      done();
    }).catch(err => done(err))
  });

  it("Should return all lists", done => {    
    intDatabase.getAllLists().then(doc => {
      expect(doc[0]._id).to.deep.equal(listId);
      done();
    }).catch(err => done(err))
  });

  it("Should add a todo item", done => {    
    intDatabase.addTodoItem(listId, {"text":"test todo"}).then(doc => {
      todoId = doc.todos[0]._id;
      expect(doc.todos[0].text).to.deep.equal("test todo");
      done();
    }).catch(err => done(err))
  });

  it("Should remove a todo item", done => {    
    intDatabase.removeTodoItem(listId, todoId).then(doc => done()).catch(err => done(err))
  });

  it("Should remove a list", done => {    
    intDatabase.removeList(listId).then(doc => {
      expect(doc._id).to.deep.equal(listId);
      listId = "";
      done();
    }).catch(err => done(err))
  }); 

});















/*
var people = [{ name: 'Alice', role: 'sender' }];
expect(people).to.be.an('array').with.length(1);
expect(people).to.have.deep.property('[0].name', 'Alice');
 */