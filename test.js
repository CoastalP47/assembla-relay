/**
 * Created by patrickeason on 6/22/16.
 */
describe('OAuth2',function(){
	var OAuth = require('oauth');

	it('gets bearer token', function (done){
		var OAuth2 = OAuth.OAuth2;

		var applicationIdentifier = 'cvLtlGokSr5P3cdmr6bg7m';
		var applicationSecret = '1d87297381d7ea4e8ec1a2dd4e6b7cb5';

		var oauth2 = new OAuth2(
			applicationIdentifier,
			applicationSecret,
			'https://api.assembla.com',
			'/authorization',
			'/token',
			null);

		oauth2.getOAuthAccessToken(
			'',
			{'grant_type': 'client_credentials'},
			function (e, access_token, refresh_token, results){
				console.log('e: ', e);
				console.log('access_token: ', access_token);
				console.log('refresh_token: ', refresh_token);
				console.log('results: ', results);
				done();
			});
	});
});