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
        return a.counter - b.counter
      });

      console.log(tutorPair);
      var list = [];
      do {
        if (list.length === 0) {
          list.push(tutorPair.shift());
        } else {

          for (var i = 0; i < tutorPair.length - 1; i++) {
            if (list[list.length - 1].alpha !== tutorPair[i].alpha
              && list[list.length - 1].beta !== tutorPair[i].alpha
              && list[list.length - 1].alpha !== tutorPair[i].beta
              && list[list.length - 1].beta !== tutorPair[i].beta
            ) {
              list.push(tutorPair[i]);
              tutorPair.splice(i, 1);
            }
          }

          if (tutorPair.length !== 0) {
            list.push(tutorPair.shift());
          }
        }

      } while (tutorPair.length !== 0);
      
      list.forEach(function (pair) {

        if (Math.random() > 0.5) {
          var swap = pair.alpha;
          pair.alpha = pair.beta;
          pair.beta = swap;
        }
      })      ;

      // console.log(list);
      return res.json({
        sessionId: new Date().getTime(),
        tutorsPairs: list
      });
    });


};

function handleError(res, err) {
  return res.send(500, err);
}
