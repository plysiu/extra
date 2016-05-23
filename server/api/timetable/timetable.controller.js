'use strict';

var _ = require('lodash');
var request = require('request');

var Timetable = require('./timetable.model');

var Tutor = require('../tutor/tutor.model');
var TutorPair = require('../tutorPair/tutorPair.model');

// Creates a new timetable in the DB.
exports.create = function (req, res) {

  /**
   * Checks if timetable with given group_id exists
   */
  Timetable.findOne({group_id: req.body.id}, function (err, timetable) {
    if (err) {
      return handleError(res, err);
    }
    if (timetable) {
      return res.json(201, timetable);

    }
    /**
     * Downloads timetable for given group_id
     */
    request({
      rejectUnauthorized: false,
      uri: 'https://api.uekplan.pl/events/' + req.body.id + '/tutors?excludeLabels=4623,4624,4635,4646,4650,4655,4726,4841,5167,5369,5615,5632,5877',
      method: 'GET'
    }, function (err, response, body) {
      if (err) {
        return handleError(res, err);
      }
      body = JSON.parse(body);
      /**
       * Saves timetable with given group_id
       */

      request({
        rejectUnauthorized: false,
        uri: 'https://api.uekplan.pl/labels/' + req.body.id,
        method: 'GET'
      }, function (err, response, group) {
        if (err) {
          return handleError(res, err);
        }

        group = JSON.parse(group);

        Timetable.create({
            group_id: group.label.id,
            name: group.label.key
          },
          function (err, timetable) {
            if (err) {
              return handleError(res, err);
            }
            /**
             */
            var tuts = [];

            console.log(body.tutors);

            body.tutors.forEach(function (tutor) {
              if (tutor) {
                tuts.push({
                  id: tutor.id,
                  name: (tutor.value) ? tutor.labeltutor.forename + ' ' + tutor.labeltutor.surename : tutor.key,
                  timetableId: timetable._id
                });
              }
            });


            /**
             * Uzupełnianie bazy prowadzącymi
             */
            Tutor.collection.insert(tuts, function (err, tutors) {
              if (err) {
                console.log('tutors:', err);
              }
              console.log(tutors);
              //**
              /**
               * Uzupełnianie bazy parami prowadzących
               * @type {Array}
               */
              var tutorPairs = [];
              for (var i = 0; i < tutors.length; i++) {
                for (var j = i + 1; j < tutors.length; j++) {
                  if (tutors[i]._id !== tutors[j]._id) {
                    tutorPairs.push({
                      timetableId: timetable._id,
                      alpha: tutors[i]._id,
                      beta: tutors[j]._id
                    });
                  }
                }
              }
              TutorPair.collection.insert(tutorPairs, function (err, tutorPairs) {
                if (err) {
                  console.log('TutorPairs', err);
                }
              });
            });
            return res.json(201, timetable);
          });
      });
    });
  });
};

function handleError(res, err) {
  console.log(err);
  return res.send(500, err);
}
