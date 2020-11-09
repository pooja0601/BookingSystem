module.exports = function(app) {
    app.post("/api/eventData", addEvent);
}

function addEvent(req,res) {
    console.log("inside controller")
    // console.log(req.body.value);
}