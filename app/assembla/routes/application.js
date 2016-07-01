/**
 * Created by pateason on 6/30/16.
 */
const express = require('express');
const router = express.Router();

/** Authentication route */
router.post('/authenticate', (req, res, next) => {
    console.log(req);
    console.log(res);
    next();
});

module.exports = router;