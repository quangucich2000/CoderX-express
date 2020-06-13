require('dotenv').config();
console.log(process.env.SESSION_SECRET)

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var userRoutes = require('./router/user.router')
var authRoutes = require('./router/auth.router')
var productRoutes = require('./router/product.router')

var authMiddleware = require('./middleware/auth.middleware.js')


var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));

//Render index--------/---------
app.get('/', function(req, res){
	res.render('index', {
		name: 'Quang'
	});
});

app.use('/user', authMiddleware.requireAuth, userRoutes);

app.use('/auth', authRoutes);

app.use('/product', productRoutes)

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});
