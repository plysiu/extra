'use strict';

var _ = require('lodash');
var TutorPair = require('./tutorPair.model');

//
exports.show = function (req, res) {
  TutorPair.find({timetableId: req.params.id})
    .populate('alpha')
    .populate('beta')
    .populate('timetableId')
    .exec(function (err, tutorPair) {
      if (err) {
        return handleError(res, err);
      }
      if (!tutorPair) {
        return res.send(404);
      }

      tutorPair.sort(function (a, b) {
        return Math.round(Math.random()) - 0.5;
      });
      tutorPair.sort(function (a, b) {
        return a.counter - b.counter;
      });


      console.log(tutorPair);


      return res.json({
        sessionId: new Date().getTime(),
        tutorsPairs: tutorPair
      });
    });
};

function handleError(res, err) {
  return res.send(500, err);
}
