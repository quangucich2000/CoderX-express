var express = require('express');

var controller = require('../controllers/user.controller.js')
var authMiddleware = require('../middleware/auth.middleware.js')

var router = express.Router();

//Render user----------/user----------
router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/cookie', function(req, res, next){
	res.cookie('user-id', 12345);
})


//Search user----------/user/search--------
router.get('/search', controller.search);


//Add user
//render-------------/user/create---------
router.get('/create', controller.create);

//user info with id
//-------------------/user/id-----------
router.get('/:id', controller.getId);


//add new-------------/user/create---------
router.post('/create', controller.postCreat);


module.exports = router;