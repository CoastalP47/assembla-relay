/**
 * Created by patrickeason on 6/22/16.
 */
//set global vars and objects
global.Notifier = require(`${__dirname}/app/notifier`);
global.port = 1333;

// load Assembla config
const Assembla  = require(`${__dirname}/app/assembla`);

// load Express config
const express = require(`${__dirname}/app/express`);

//load Electron config
const electron = require(`${__dirname}/app/electron`);

// initialize functions
Assembla.init( () => {
    express();
    electron.init();
});