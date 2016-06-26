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
);