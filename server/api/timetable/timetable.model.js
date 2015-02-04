'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TimetableSchema = new Schema({
  group_id: {type: [Number], unique: true}
});

module.exports = mongoose.model('Timetable', TimetableSchema);
