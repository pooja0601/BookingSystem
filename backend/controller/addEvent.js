const AddEventDB =  require('../models/addEventDB');
module.exports = function(app) {
    app.post("/api/eventData", addEvent);
}

function addEvent(req,res) {
    console.log("inside controller")
    console.log(req.body.value);

    let saveData = new AddEventDB({
        eventName : req.body.value.eventName,
        startDate : req.body.value.startDate,
        endDate : req.body.value.endDate
    })

    // console.log(saveData);
    return saveData.save().then(() => {
        return res.status(200).send({message: 'event successfully saved'});
    }).catch(() => {
        return res.status(500).send({message: "Error in saving event data"})
    })
}