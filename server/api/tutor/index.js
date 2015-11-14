'use strict';

var express = require('express');
var controller = require('./tutor.controller');

var router = express.Router();
router.get('/random/:timetableId', controller.randomHighscore);
router.get('/random', controller.randomHighscore);

router.get('/highscore', controller.globalHighscore);
router.get('/highscore/:timetableId', controller.highscore);
router.get('/highscore/:timetableId/:sessionId', controller.localHighscore);
router.get('/exportAll', controller.exportAll);
module.exports = router;
