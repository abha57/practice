var mongoose = require('mongoose');

var badApiSchema = mongoose.Schema({
	category: {
		type: String,
		required: true
	}
});

var BadApi = module.exports = mongoose.model('badApi', badApiSchema);

module.exports.getApi = function(cb){
	return BadApi.find(cb);
};

