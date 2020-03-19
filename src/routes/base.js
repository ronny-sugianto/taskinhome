const express = require('express');
const router = express.Router();
const logEvent = require('../event/myEmitter');
const chatRoute = require('./chat.route');
const validationRoute = require('./validation.route');
const socket = require('./socket');


router.use('/',socket);

router.use('/chat', chatRoute);
router.use('/validation', validationRoute);

//No Route
//if user go to unknown page
router.use((req, res) => {
    logEvent.emit('APP_ERROR', {
        logTitle : '[NO-ROUTE]',
        logMessage : `There is no route to ${req.url}`
    });
    res.status(404);
    res.json({message : `There is no route to ${req.url}`});
});


module.exports = router;