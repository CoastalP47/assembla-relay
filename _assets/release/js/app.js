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
});/**
 * $http.get('/someUrl', config).then(successCallback, errorCallback);
 * $http.post('/someUrl', data, config).then(successCallback, errorCallback);
 *
 * $http.get
 * $http.head
 * $http.post
 * $http.put
 * $http.delete
 * $http.jsonp
 * $http.patch
 */

app.factory(
    'ApplicationService',
    ['$http',
    ($http) => {
        return {
            authenticate: (data, success, failure) => {
                $http.post('/api/authenticate', data).then(success, failure);
            }
        };
    }]
);/**
 * Created by pateason on 6/25/16.
 */
/**
 * Created by pateason on 6/25/16.
 */
/**
 * Created by pateason on 6/25/16.
 */
/**
 * Created by pateason on 6/25/16.
 */
/**
 * Created by patrickeason on 6/24/16.
 */
app.controller('AuthenticationController',
    ['$scope', 'ApplicationService',
        ($scope, ApplicationService) => {

            $scope.successMessage = null;
            $scope.errorMessage = null;
            $scope.loading = false;

            $scope.submitForm = () => {
                if($scope.authForm.$valid)
                    $scope.authenticate();
            };

            $scope.authenticate = () => {
                ApplicationService.authenticate($scope.data);
            };

        }]
);/**
 * Created by patrickeason on 6/24/16.
 */
app.controller('HeaderController',
	['$scope',
	($scope) => {

		$scope.userNav = false;
		$scope.mainNav = false;

		$scope.showMainNav = () => {
			$scope.mainNav = !$scope.mainNav;
		};

		$scope.showUserNav = () => {
			$scope.userNav = !$scope.userNav;
		};

	}]
);