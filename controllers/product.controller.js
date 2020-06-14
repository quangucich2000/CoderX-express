var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
	var page = parseInt(req.query.page) || 1;
	var perPage = 8;
	var pageEnd = Math.ceil(db.get('products').value().length / perPage);

	var start = (page-1)*perPage;
	var end = start + perPage;

	if (page <= 2) {
		var pagesLeft = [];
	}
	else {
		var pagesLeft = [
			page - 2,
			page - 1
		]
	}
	if (page >= pageEnd) {
		var pagesRight = [];
	}
	else if(page == pageEnd-1){
		var pagesRight = [
			page + 1
		]
	}
	else {
		var pagesRight = [
			page + 1,
			page + 2
		]
	}

	res.render('./product/index', {
		products: db.get('products').value().slice(start, end),
		
		pagesLeft: pagesLeft,
		pageNow: page,
		pagesRight: pagesRight,
		pageEnd: pageEnd
	})
}

module.exports.create = function(req, res){
	res.render('./product/create')
}

module.exports.postCreateProduct = function(req, res){
	req.body.id = shortid.generate();

	var errors = [];
	if(!req.body.name){
		errors.push('Name is required');
	}
	if(!req.body.image){
		errors.push('Image is required');
	}
	if(!req.body.description){
		errors.push('Description is required');
	}
	if(!req.body.price){
		errors.push('Price is required');
	}

	if(errors.length){
		res.render('./product/create', {
			errors: errors,
			values: req.body
		});
		return;
	}

	db.get('products').push(req.body).write();
	res.redirect('/product');
}

