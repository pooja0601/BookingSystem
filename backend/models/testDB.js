const mongoose  = require('../dbConfig')

const TestSchema = mongoose.Schema({
    name: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    } 
});

var TestDB = mongoose.model("TestDB", TestSchema, 'tests')
module.exports = TestDB