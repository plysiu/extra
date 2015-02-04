'use strict';

var express = require('express');
var controller = require('./tutorsFight.controller');

var router = express.Router();

router.post('/', controller.create);


//router.get('/:timetableId',controller.show);
router.get('/sessionFights/:sessionId', controller.sessionFights);

module.exports = router;
