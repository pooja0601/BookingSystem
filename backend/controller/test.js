
module.exports = function(app) {
    app.post('/test/set-value', setValue);
}

function setValue( req, res){
    console.log(req.body);
    return { message: "got value"}
}