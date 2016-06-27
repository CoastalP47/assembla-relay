/**
 * Created by Pat on 6/22/2016.
 */
const fs		= require('fs');
var exports = module.exports = {};

readWriteFile = (fileName, callback) => {
    fs.exists(fileName, (exists) => {
        if(exists){
            fs.readFile(fileName, 'utf-8', (err,data) => {
                data = JSON.parse(data);
                callback(data);
            });
        }else{
            fs.writeFile(
                fileName,
                JSON.stringify({
                    api_key:null,
                    api_secret:null
                }),
                {
                    flag: 'wx'
                },
                (err) => {
                    if(err)
                        throw(err);
                    fs.readFile(fileName, 'utf-8', (err,data) => {
                        data = JSON.parse(data);
                        callback(data);
                    });
                }
            );
        }
    });
};

exports.apiURL = 'https://api.assembla.com';
exports._setConfig = (cb) => {
    readWriteFile(`${__dirname}/../../config.json`, (data) => {
        if(data.api_key)
            exports.apiKey = data.api_key;
        if(data.api_secret)
            exports.apiSecret = data.api_secret;
        cb();
    });
};