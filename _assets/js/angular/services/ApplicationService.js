/**
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
);