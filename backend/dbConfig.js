var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookingSystem', { useNewUrlParser: true }, function(){
	console.log('mongodb connected')
});

module.exports = mongoose;