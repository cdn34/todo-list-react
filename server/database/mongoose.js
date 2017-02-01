const mongoose = require('mongoose');
//const mongoUrl = "mongodb://localhost/todo-list-app";
const mongoUrl = "mongodb://adm:admpass@ds111479.mlab.com:11479/heroku_wcj97z3g";


const mongooseConnect = _ => {
    //console.log('Mongoose started');
    mongoose.connect(mongoUrl);
}

module.exports = {
    mongooseConnect : mongooseConnect,
    mongoUrl : mongoUrl
};