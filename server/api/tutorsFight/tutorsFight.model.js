'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TutorsFightSchema = new Schema({
    alpha: {type: Schema.ObjectId, ref: 'Tutor'},
    beta: {type: Schema.ObjectId, ref: 'Tutor'},
    result: {type: Number},
    tutorPairId: {type: Schema.ObjectId, ref: 'TutorPair'},
    timetableId: {type: Schema.ObjectId, ref: 'Timetable'},
    sessionId: {type: Number},
    timestamp: {
      type: Number, default: new Date().getTime()
    },
    grade: {type: Number, default: 0}

  })
  ;

module.exports = mongoose.model('TutorsFight', TutorsFightSchema);
