'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TimetableSchema = new Schema({
  group_id: {type: [Number], unique: true},
  name: {type:String}
});

module.exports = mongoose.model('Timetable', TimetableSchema);
