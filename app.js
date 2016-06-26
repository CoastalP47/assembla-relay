/**
 * Created by patrickeason on 6/22/16.
 */
const express = require('express');
const hbs = require('express-hbs');

let app = express();
global.port = 1333;

const electron = require(`${__dirname}/app/electron`);

const Assembla  = require(`${__dirname}/app/assembla/api`);
const AppCache	= require(`${__dirname}/app/assembla/cache`);

global.Notifier = require(`${__dirname}/app/notifier`);

/**
 * Configure handlebars
 */
let viewsDir = `${__dirname}/app/views`;
app.engine('hbs', hbs.express4({
	partialsDir		: `${viewsDir}/partials`,
	layoutsDir		: `${viewsDir}/layouts`,
	defaultLayout	: `${viewsDir}/layouts/main`
}));
app.set('view engine', 'hbs');
app.set('views', `${viewsDir}`);
app.use('/vendor', express.static(__dirname + '/node_modules/'));
app.use('/assets', express.static(__dirname + '/_assets/release/'));


/**
 * Auth middleware
 */
app.use(function(req, res, next){
	if(app.locals.currentUser){
		next();
	}else{
		res.render('auth', {layout:'auth'});
	}
});



/**
 * Get current user, cache, create express local
 */
// Assembla.currentUser(null, function(response){
// 	app.locals.currentUser = response;
// 	Notifier(`Welcome back, ${app.locals.currentUser.name}!`);
//
// 	Assembla.profilePicture(response.id, function(response){
// 		electron.createWindow();
// 	});
// });


/**
 * Load routes
 */
app.get('/', function(req, res){
	res.render('index');
});


/**
 * Start server
 */
app.listen(global.port, function () {
	console.log(`Relay is listening on port ${global.port}`);
});