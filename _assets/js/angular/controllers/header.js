/**
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