const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});
const co = require('co');
const intDatabase = require("../database/intDatabase");


router.get('/getAllLists', co.wrap( function *(ctx, next) {
    ctx.body = yield intDatabase.getAllLists();
}));


router.post('/addList', co.wrap( function *(ctx, next) {
    ctx.body = yield intDatabase.getAllLists(ctx.body.title); 
    /*return intDatabase.addList(req.body.title).then( result => {
        res.json(result);
    }).catch( error => {
        res.json(error);
    });*/
}));

router.del('/removeList', co.wrap( function *(ctx, next)  {
    ctx.body = yield intDatabase.getAllLists(ctx.query['listId']);
    // return intDatabase.removeList(req.query['listId']).then( result => {
    //     res.json(result);
    // }).catch( error => {
    //     res.json(error);
    // });
}));


router.post('/addTodo', co.wrap( function *(ctx, next) {
    ctx.body = yield intDatabase.addTodoItem(ctx.body.listId, ctx.body.todo);
    // return intDatabase.addTodoItem(req.body.listId, req.body.todo).then( result => {
    //     res.json(result.todos[result.todos.length-1]);
    // }).catch( error => {
    //     res.json(error);
    // });
}));

router.del('/removeTodo', co.wrap( function *(ctx, next)  {
    ctx.body = yield intDatabase.removeTodoItem(req.query['listId'], req.query['todoId']);
    // return intDatabase.removeTodoItem(req.query['listId'], req.query['todoId']).then( result => {
    //     res.json(result);
    // }).catch( error => {
    //     res.json(error);
    // });
}));

module.exports = router;