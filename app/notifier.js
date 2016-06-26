const notifier = require('node-notifier');

module.exports = function(message){
	notifier.notify({
		title: 'Relay',
		message: message,
		icon: `${__dirname}/../_assets/release/images/icon.png`,
		sound: true,
		wait: true
	});
};