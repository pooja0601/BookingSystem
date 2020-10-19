module.exports = function(app) {
    app.post('/api/setValue', setValue);
}
function setValue( req, res){
    console.log("inside controller",req.body.value);
}