var mongoose = require('mongoose');

var badApiSchema = mongoose.Schema({ 
	category: {
		type: String,
		required: true
	},
	createdAt : Date
});

var BadApi = module.exports = mongoose.model('BadApi', badApiSchema);

module.exports.getApi = function(cb){
	 BadApi.find(cb);
};

module.exports.addApi = function(api, cb){
	BadApi.create(api, cb);
}
