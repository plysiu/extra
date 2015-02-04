'use strict';

var express = require('express');
var controller = require('./tutor.controller');

var router = express.Router();
router.get('/random/:timetableId', controller.randomHighscore);

router.get('/highscore/:timetableId', controller.globalHighscore);



router.get('/highscore/:timetableId/:sessionId', controller.localHighscore);

module.exports = router;
