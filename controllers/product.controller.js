// var db = require('../db');
// var shortid = require('shortid');

// module.exports.index = function(req, res){
// 	res.render('./product/index', {
// 		products: db.get('products').value()
// 	});
// }

// module.exports.create = function(req, res){
// 	res.render('./product/create');
// }

// module.exports.postCreate = function(req, res){
// 	req.body.id = shortid.generate();

// 	db.get('products').push(req.body).write();
// 	res.redirect('/product');
// }