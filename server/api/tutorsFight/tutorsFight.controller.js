'use strict';

var _ = require('lodash');
var TutorsFight = require('./tutorsFight.model');

var TutorPair = require('../tutorPair/tutorPair.model');
var Tutor = require('../tutor/tutor.model');
var ELO = require('arpad');
var elo = new ELO({
  default: 16
});

// Creates a new tutorsFight in the DB.
exports.create = function (req, res) {
  TutorsFight.create(req.body, function (err, tutorsFight) {
    if (err) {
      return handleError(res, err);
    }
    Tutor.findOne({_id: tutorsFight.alpha}).exec(function (err, alpha) {
      if (err) {
        return handleError(res, err);
      }
      Tutor.findOne({_id: tutorsFight.beta}).exec(function (err, beta) {
        if (err) {
          return handleError(res, err);
        }

        var alphaPoints = alpha.points;
        var betaPoints = beta.points;
        // 0 = alpha won, beta lost
        if (tutorsFight.result === 0) {
          alpha.points = elo.newRatingIfWon(alphaPoints, betaPoints);
          beta.points = elo.newRatingIfLost(betaPoints, alphaPoints);
        }
        // 1 = tied
        if (tutorsFight.result === 1) {
          alpha.points = elo.newRatingIfTied(alphaPoints, betaPoints);
          beta.points = elo.newRatingIfTied(betaPoints, alphaPoints);
        }
        // 2 = alpha lost, beta won
        if (tutorsFight.result === 2) {
          alpha.points = elo.newRatingIfLost(alphaPoints, betaPoints);
          beta.points = elo.newRatingIfWon(betaPoints, alphaPoints);
        }
        alpha.save();
        beta.save();


        TutorPair.findOne({_id: tutorsFight.tutorPairId}, function (err, tutorPair) {
          if (err) {
            return handleError(res, err);
          }

          tutorPair.counter++;
          tutorPair.save();
        });

      });
    });
    return res.json(201, tutorsFight);
  });
};


//
exports.sessionFights = function (req, res) {
  TutorsFight.find({sessionId: req.params.sessionId})
    .exec(function (err, fights) {
      if (err) {
        return handleError(res, err);
      }
      if (!fights) {
        return res.send(404);
      }

      return res.json(fights);
    });
};


function handleError(res, err) {
  return res.send(500, err);
}
