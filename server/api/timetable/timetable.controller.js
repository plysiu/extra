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
        uri: 'http://devplan.uek.krakow.pl/api/timetables/g' + req.body.id,
        method: 'GET'
      }, function (err, response, body) {
        if (err) {
          return handleError(res, err);
        }
        body = JSON.parse(body);
        /**
         * Saves timetable with given group_id
         */
        Timetable.create(body.params, function (err, timetable) {
            if (err) {
              return handleError(res, err);
            }
            /**
             */
            var tutors = {};
            var validTutors = ['Jacek Wołoszyn',
              'Ryszard Tadeusiewicz',
              'Jan Madej',
              'Janusz Morajda',
              'Grażyna Paliwoda-Pękosz',
              'Piotr Soja',
              'Janusz Stal',
              'Jan Trąbka',
              'Wit Urban',
              'Artur Żuwała',
              'Paweł Lula',
              'Dariusz Dymek',
              'Mariusz Grabowski',
              'Dariusz Put',
              'Tadeusz Wilusz',
              'Paweł Wołoszyn',
              'Agnieszka Zając',
              'Przemysław Jaśko',
              'Janusz Tuchowski',
              'Katarzyna Wójcik'
            ];


            for (var i = 0; i < body.activities.length; i++) {


              for (var j = 0; j < body.activities[i].tutors.length; j++) {

                if (body.activities[i].tutors[j].name.indexOf('dr ') !== -1
                  || body.activities[i].tutors[j].name.indexOf('mgr ') !== -1
                  || body.activities[i].tutors[j].name.indexOf('inż. ') !== -1
                  || body.activities[i].tutors[j].name.indexOf('prof. ') !== -1)
                  tutors[body.activities[i].tutors[j].name] = {
                    id: body.activities[i].tutors[j].id,
                    name: body.activities[i].tutors[j].name,
                    timetableId: timetable._id
                  };

              }
            }

            var tuts = [];
            for (var t in tutors) {
              for (var r in validTutors) {
                if (tutors[t].name.indexOf(validTutors[r]) !== -1) {
                  tuts.push(tutors[t]);
                }
              }
            }
            /**
             * Uzupełnianie bazy prowadzącymi
             */
            Tutor.collection.insert(tuts, function (err, tutors) {
              if (err) {
                console.log('tutors:', err);
              }
              //     console.log(tutors);
              //**
              /**
               * Uzupełnianie bazy parami prowadzących
               * @type {Array}
               */
              var tutorPairs = [];
              for (var i = 0; i < tutors.length; i++) {
                for (var j = i + 1; j < tutors.length; j++) {
                  tutorPairs.push({
                    timetableId: timetable._id,
                    alpha: tutors[i]._id,
                    beta: tutors[j]._id
                  });
                }
              }
              TutorPair.collection.insert(tutorPairs, function (err, tutorPairs) {
                if (err) {
                  console.log('TutorPairs', err);
                }
              });
            });
            return res.json(201, timetable);
          }
        );
      });
    }
  );
};

function handleError(res, err) {
  return res.send(500, err);
}
