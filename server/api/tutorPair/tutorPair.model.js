'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TutorPairSchema = new Schema({
  alpha: {type: Schema.ObjectId, ref: 'Tutor'},
  beta: {type: Schema.ObjectId, ref: 'Tutor'},

  timetableId: {type: Schema.ObjectId, ref: 'Timetable'},
  counter: {type: Number, default: 0}


});

module.exports = mongoose.model('TutorPair', TutorPairSchema);
