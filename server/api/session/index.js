'use strict';

var express = require('express');
var controller = require('./session.controller');

var router = express.Router();

router.post('/', controller.create);
router.get('/:id', controller.getSession);

module.exports = router;
