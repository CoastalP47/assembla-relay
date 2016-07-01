const express 	= require('express');
const hbs 		= require('express-hbs');
const _         = require('lodash');

module.exports = () => {
    let app = express();

    /**
     * Configure handlebars
     */
    let viewsDir = `${__dirname}/views`;
    app.engine('hbs', hbs.express4({
        partialsDir: `${viewsDir}/partials`,
        layoutsDir: `${viewsDir}/layouts`,
        defaultLayout: `${viewsDir}/layouts/main`
    }));
    app.set('view engine', 'hbs');
    app.set('views', `${viewsDir}`);
    app.use('/vendor', express.static(`${__dirname}/../node_modules/`));
    app.use('/assets', express.static(`${__dirname}/../_assets/release/`));


    /**
     * Auth middleware
     */
    app.use(function (req, res, next) {
        if (app.locals.currentUser) {
            next();
        } else {
            res.render('auth', {layout: 'auth'});
        }
    });


    /**
     * Load routes
     */
    //api routes
    var apiRouters = require('require-all')({
        dirname     :  `${__dirname}/assembla/routes`
    });
    _.each(apiRouters, function(router, key){
        if( _.isObject(router) ){
            if( !_.isEmpty(router) ){
                app.use(`/api/${key}`, router);
            }else{
                console.error(`Router ${key} is empty`);
            }
        }else{
            console.error(`Router ${key} is not an object`);
        }
    });
    
    
    // index route
    app.get('/', function (req, res) {
        res.render('index');
    });


    /**
     * Start server
     */
    app.listen(global.port, function () {
        console.log(`Relay is listening on port ${global.port}`);
    });
};