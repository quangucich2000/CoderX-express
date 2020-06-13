// var db = require('../db')

// module.exports.requireProduct = function(req, res, next) {
// 	var errors = [];
// 	if(!req.body.name){
// 		errors.push('Add your name\'s product')
// 	}

// 	if(!req.body.image){
// 		errors.push('Add your image')
// 	}

// 	if(!req.body.description){
// 		errors.push('Add your description')
// 	}

// 	if(!req.body.price){
// 		errors.push('Add your price')
// 	}

// 	if(errors.length){
// 		res.render('./product/create.pug', {
// 			errors: errors,
// 			values: req.body
// 		})
// 		return;
// 	}

// 	next();
// }