const mongoose  = require('../dbConfig');

const AddEventSchema = mongoose.Schema({
    eventName: {
        type: String,
    },
    startDate: {
        type: Date,

    },
    endDate: {
        type: Date,
        
    } 
});

var AddEventDB = mongoose.model("AddEventDB", AddEventSchema, 'addEvents')
module.exports = AddEventDB