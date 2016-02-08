var data = require('../account.json');

exports.view = function(req, res){
	console.log(data);
	res.render('homepage', data);
};