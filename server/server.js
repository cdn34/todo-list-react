const Koa = require('koa');
const Router = require('koa-router');
const compression = require('koa-compress');
const bodyParser = require('koa-bodyparser');
const mongoose = require('./database/mongoose');
const path = require('path');
var send = require('koa-send');
const co = require('co');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8000;

app.use(bodyParser());//limit to 10mb for body request
app.use(compression());

//app.use(serve(path.join(__dirname, '../client/dist')));
mongoose.mongooseConnect();


//Configure routes
const main = require('./routes/main');
//router.use('/',main.routes());
app
.use(main.routes())
.use(main.allowedMethods());

// app.use(co.wrap(function *(){
//  yield send(this, this.path, { root: path.join(__dirname, '/index.html') });
// }));

app.listen(port);
//http.createServer(app).listen(port);
console.log('Server running on port: ' + port);