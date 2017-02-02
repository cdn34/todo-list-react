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
    ctx.body = yield intDatabase.addList(ctx.request.body.title);
}));

router.del('/removeList', co.wrap( function *(ctx, next)  {
    ctx.body = yield intDatabase.removeList(ctx.query['listId']);
}));


router.post('/addTodo', co.wrap( function *(ctx, next) {
    ctx.body = yield intDatabase.addTodoItem(ctx.request.body.listId, ctx.request.body.todo);
}));

router.del('/removeTodo', co.wrap( function *(ctx, next)  {
    ctx.body = yield intDatabase.removeTodoItem(req.query['listId'], req.query['todoId']);
}));

module.exports = router;