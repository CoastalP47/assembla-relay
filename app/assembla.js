const API           = require(`${__dirname}/assembla/api`);
const Cache         = require(`${__dirname}/assembla/cache`);
const Authenticate  = require(`${__dirname}/assembla/authenticate`);


module.exports = {
    api     : API,
    cache   : Cache,
    auth    : Authenticate,
    init    : (cb) => {
        Authenticate._setConfig( () => {
            cb();
        });
    }
};