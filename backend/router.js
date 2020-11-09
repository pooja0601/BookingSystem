var testController = require('./controller/test');
var addEventController = require('./controller/addEvent');


module.exports = function(app){
    testController(app);
    addEventController(app);
}