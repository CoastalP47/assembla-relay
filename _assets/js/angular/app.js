/**
 * Created by patrickeason on 6/24/16.
 */
/** Instantiate application */
angular.module('ticketstotasks', ['ticketstotasks.controllers']);

/** create controllers */
var app = angular.module('ticketstotasks.controllers', []);

/** Change start symbol to work with handlebars */
app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
	//$interpolateProvider.endSymbol('}]}');
});