const _ = require('lodash');

let api_cache;
api_cache = {};

module.exports = {
	set: function(key, value){
		api_cache[key] = value;
	},
	insert: function(key, value){
		let cache_object = _api_cache[key];
	},
	get: function(key){
		return _api_cache[key];
	},
	remove: function(key){
		delete _api_cache[key];
	},
	reset: function(){
		_api_cache = {};
	}
};