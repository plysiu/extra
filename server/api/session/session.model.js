'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SessionSchema = new Schema({
    session: {type: String, unique: true},
    text: {
      type: String
    }
  })
  ;

module.exports = mongoose.model('Session', SessionSchema);
