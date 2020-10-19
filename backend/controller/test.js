
const TestDB = require('../models/testDB');

module.exports = function(app) {
    app.post('/api/setValue', setValue);
}
 function setValue ( req, res){
    let test = new TestDB({
        name: req.body.value
    })
    
    console.log("inside controller",req.body.value);
    return test.save().then(() => {
        return res.status(200).send({message: 'Success'});
    }).catch(() => {
        return res.status(500).send({message: "Error in saving data"})
    })
}
