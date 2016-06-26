const fs = require('fs');
const Request 	= require('request');
const Moment 	= require('moment');
const _ 		= require('lodash');

const AssemblaAuth = require(`${__dirname}/authenticate`);
let apiURL 		= AssemblaAuth.apiURL;
let apiKey 		= AssemblaAuth.apiKey;
let apiSecret 	= AssemblaAuth.apiSecret;

let baseOptions = {
    'headers':{
        'X-Api-key': apiKey,
        'X-Api-secret': apiSecret
    }
};

module.exports = {
	/**
     * Normalize Requests
     * @param url
     * @returns {{url: *, headers: {X-Api-key: *, X-Api-secret: *}}}
     */
    createRequest: function(url, method, params, payload, callback){
        let newOptions = baseOptions;

		/** merge and normalize dates */
		if(params)
        	_.merge(newOptions, params);
		if(newOptions.to)
			newOptions.to = this.createDate(newOptions.to);
		if(newOptions.from)
			newOptions.from = this.createDate(newOptions.from);


        newOptions.url = url;

		Request[method](
			newOptions,
			function(error, response, body){
				if(error){
					throw error;
				}else{
					return callback(body);
				}
			});
    },


    createDate: function(date){
		let normalizeFormat = 'yyyy-mm-dd hh:mm';
		let momentObject = new Moment(date);
		return momentObject.format(normalizeFormat);
    },


	/**
     * Stream
     */
     activity: function(params, callback){
        this.createRequest(
        	`${apiURL}/v1/activity.json`,
			'get',
			params,
			null,
			function(response){
				return callback( JSON.parse(response) );
			});
     },


	/**
	 * Mentions
     */


	/**
	 * Users
     */
	currentUser: function(params, callback){
		this.createRequest(
			`${apiURL}/v1/user.json`,
			'get',
			params,
			null,
			function(response){
				return callback( JSON.parse(response) );
			});
	},
	profilePicture: function(userId, callback){
		console.log(`${apiURL}/v1/users/${userId}/picture.json`);

		let o = baseOptions;
		o.url = `${apiURL}/v1/users/${userId}/picture.json`;
		o.encoding = null;

		Request.get(
			o,
			function(error, response, body){
				if(error){
					throw error;
				}else{

					fs.writeFile(
						`${__dirname}/../../_assets/release/images/profile_${userId}.png`,
						body,
						'binary',
						function (err){
							return callback(`${__dirname}/../../_assets/release/images/profile_${userId}.png`);
						});
				}
			});

	}


	/**
	 * Spaces
     */


	/**
	 * User Roles (Space members)
     */


	/**
	 * Space Tools
     */


	/**
	 * Tickets
     */


	/**
	 * Ticket Statuses
     */


	/**
	 * Tags
     */


	/**
	 * Tickets Custom Fields
     */


	/**
	 * Ticket Associations
     */


	/**
	 * Ticket Comments
     */


	/**
	 * Milestones
     */


	/**
	 * Documents
     */


	/**
	 * StandUp Reports
     */


	/**
	 * StandUp Away Reports
     */


	/**
	 * Merge Requests
     */


	/**
	 * Merge Request Versions
     */


	/**
	 * Merge Request Version Comments
     */


	/**
	 * Merge Request Version Votes
     */


	/**
	 * Wiki Pages
     */


	/**
	 * Wiki Page Versions
     */


	/**
	 * Webhooks
     */


	/**
	 * Tasks
     */


	/**
	 * User SSH Keys
     */


	/**
     * Portfolio Stream
     */


    /**
     * Portfolio Spaces
     */


	/**
	 * Portfolio Users
     */


	/**
	 * Portfolio Invitations
     */


	/**
	 * Portfolio Groups
     */


	/**
	 * Portfolio Tasks
     */


	/**
	 * Portfolio Standup Reports
     */


	/**
	 * Portfolio Tickets
     */


	/**
	 * Portfolio Ticket Reports
     */


	/**
	 * Space SSH Keys
     */


	/**
	 * SSH Servers
     */


	/**
	 * SSH Actions
     */


	/**
	 * SSH Action Launches
     */
};