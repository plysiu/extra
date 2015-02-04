'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TutorSchema = new Schema({
    id: Number,
    name: String,
    timetableId: {
      type: Schema.ObjectId,
      ref: 'Timetable'
    },
    points: {type: Number, default: 1400}
  })
  ;

module.exports = mongoose.model('Tutor', TutorSchema);
