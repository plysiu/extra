'use strict';

var _ = require('lodash');
var Tutor = require('./tutor.model');
var TutorsFight = require('../tutorsFight/tutorsFight.model');
var ELO = require('arpad');
var elo = new ELO();


exports.globalHighscore = function (req, res) {
  var query = TutorsFight.find();


  query.populate('alpha')
    .populate('beta')
    .populate('timetableId')
    .sort({timestamp: 1})

    .exec(function (err, tutorsFights) {
      if (err) {
        return handleError(res, err);
      }
      if (!tutorsFights) {
        return res.send(404);
      }
      var tutors = [];
      for (var i = 0; i < tutorsFights.length; i++) {
        tutors[tutorsFights[i].alpha.id] = tutorsFights[i].alpha;
        tutors[tutorsFights[i].alpha.id].points = 1400;
        tutors[tutorsFights[i].beta.id] = tutorsFights[i].beta;
        tutors[tutorsFights[i].beta.id].points = 1400;
      }
      for (var i = 0; i < tutorsFights.length; i++) {
        var alphaPoints = tutors[tutorsFights[i].alpha.id].points;
        var betaPoints = tutors[tutorsFights[i].beta.id].points;
        // 0 = alpha won, beta lost
        if (tutorsFights[i].result === 0) {
          tutors[tutorsFights[i].alpha.id].points = elo.newRatingIfWon(alphaPoints, betaPoints);
          tutors[tutorsFights[i].beta.id].points = elo.newRatingIfLost(betaPoints, alphaPoints);
        }
        // 1 = tied
        if (tutorsFights[i].result === 1) {
          tutors[tutorsFights[i].alpha.id].points = elo.newRatingIfTied(alphaPoints, betaPoints);
          tutors[tutorsFights[i].beta.id].points = elo.newRatingIfTied(betaPoints, alphaPoints);
        }
        // 2 = alpha lost, beta won
        if (tutorsFights[i].result === 2) {
          tutors[tutorsFights[i].alpha.id].points = elo.newRatingIfLost(alphaPoints, betaPoints);
          tutors[tutorsFights[i].beta.id].points = elo.newRatingIfWon(betaPoints, alphaPoints);
        }
      }
      var a = [];
      for (var x in tutors) {
        a.push(tutors[x]);
      }
      return res.json(a.sort(function (a, b) {
        return b.points - a.points;
      }));
    });
};
//
exports.highscore = function (req, res) {
  var query = Tutor.find();
  query.where('timetableId').equals(req.params.timetableId);
  query.populate('timetableId')
    .sort({points: -1})
    .exec(function (err, tutors) {
      if (err) {
        return handleError(res, err);
      }
      if (!tutors) {
        return res.send(404);
      }

      return res.json(tutors);
    });
};
//
exports.localHighscore = function (req, res) {
  var query = TutorsFight.find();
  query.where('timetableId').equals(req.params.timetableId);
  query.where('sessionId').equals(req.params.sessionId);

  query.populate('alpha')
    .populate('beta')
    .populate('timetableId')
    .sort({timestamp: 1})

    .exec(function (err, tutorsFights) {
      if (err) {
        return handleError(res, err);
      }
      if (!tutorsFights) {
        return res.send(404);
      }
      var tutors = [];
      for (var i = 0; i < tutorsFights.length; i++) {
        tutors[tutorsFights[i].alpha._id] = tutorsFights[i].alpha;
        tutors[tutorsFights[i].alpha._id].points = 1400;
        tutors[tutorsFights[i].beta._id] = tutorsFights[i].beta;
        tutors[tutorsFights[i].beta._id].points = 1400;
      }
      for (var i = 0; i < tutorsFights.length; i++) {
        var alphaPoints = tutors[tutorsFights[i].alpha._id].points;
        var betaPoints = tutors[tutorsFights[i].beta._id].points;
        // 0 = alpha won, beta lost
        if (tutorsFights[i].result === 0) {
          tutors[tutorsFights[i].alpha._id].points = elo.newRatingIfWon(alphaPoints, betaPoints);
          tutors[tutorsFights[i].beta._id].points = elo.newRatingIfLost(betaPoints, alphaPoints);
        }
        // 1 = tied
        if (tutorsFights[i].result === 1) {
          tutors[tutorsFights[i].alpha._id].points = elo.newRatingIfTied(alphaPoints, betaPoints);
          tutors[tutorsFights[i].beta._id].points = elo.newRatingIfTied(betaPoints, alphaPoints);
        }
        // 2 = alpha lost, beta won
        if (tutorsFights[i].result === 2) {
          tutors[tutorsFights[i].alpha._id].points = elo.newRatingIfLost(alphaPoints, betaPoints);
          tutors[tutorsFights[i].beta._id].points = elo.newRatingIfWon(betaPoints, alphaPoints);
        }
      }
      var a = [];
      for (var x in tutors) {
        a.push(tutors[x]);
      }
      return res.json(a.sort(function (a, b) {
        return b.points - a.points;
      }));
    });
};

//
exports.randomHighscore = function (req, res) {
  TutorsFight.find({timetableId: req.params.timetableId})
    .populate('alpha')
    .populate('beta')
    .populate('timetableId')
    .exec(function (err, tutorsFights) {
      if (err) {
        return handleError(res, err);
      }
      if (!tutorsFights) {
        return res.send(404);
      }
      var tutors = [];
      for (var i = 0; i < tutorsFights.length; i++) {
        tutors[tutorsFights[i].alpha._id] = tutorsFights[i].alpha;
        tutors[tutorsFights[i].alpha._id].points = 1400;
        tutors[tutorsFights[i].beta._id] = tutorsFights[i].beta;
        tutors[tutorsFights[i].beta._id].points = 1400;
      }
      var si = 0;
      var no = 0;
      for (var j = 0; j < 100; j++) {
        tutorsFights.sort(function (a, b) {
          var c = Math.round(Math.random()) - 0.5;
          if (c > 0) {
            si++;
          } else {
            no++;
          }
          return c;
          //return (Math.round(Math.random()) - 0.5);
        });

        tutorsFights.sort(function (a, b) {
          a.sessionId - b.sessionId;
        });

        for (var i = 0; i < tutorsFights.length; i++) {
          var alphaPoints = tutors[tutorsFights[i].alpha._id].points;
          var betaPoints = tutors[tutorsFights[i].beta._id].points;
          // 0 = alpha won, beta lost
          if (tutorsFights[i].result === 0) {
            tutors[tutorsFights[i].alpha._id].points = elo.newRatingIfWon(alphaPoints, betaPoints);
            tutors[tutorsFights[i].beta._id].points = elo.newRatingIfLost(betaPoints, alphaPoints);
          }
          // 1 = tied
          if (tutorsFights[i].result === 1) {
            tutors[tutorsFights[i].alpha._id].points = elo.newRatingIfTied(alphaPoints, betaPoints);
            tutors[tutorsFights[i].beta._id].points = elo.newRatingIfTied(betaPoints, alphaPoints);
          }
          // 2 = alpha lost, beta won
          if (tutorsFights[i].result === 2) {
            tutors[tutorsFights[i].alpha._id].points = elo.newRatingIfLost(alphaPoints, betaPoints);
            tutors[tutorsFights[i].beta._id].points = elo.newRatingIfWon(betaPoints, alphaPoints);
          }
        }

      }
      var a = [];
      for (var x in tutors) {
        a.push(tutors[x]);
      }
      return res.json({
        fights: tutorsFights.length,
        tutors: a.sort(function (a, b) {
          return b.points - a.points;
        })
      });
    });
};

exports.exportAll = function (req, res) {
  TutorsFight.find()
    .populate('alpha')
    .populate('beta')
    .populate('tutorPairId')
    .populate('timetableId')
    .exec(function (err, tutorsFights) {
      if (err) {
        return handleError(res, err);
      }
      if (!tutorsFights) {
        return res.send(404);
      }
      return res.json(tutorsFights);
    });
};

function handleError(res, err) {
  return res.send(500, err);
}
