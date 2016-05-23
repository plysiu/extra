'use strict';
var Session = require('./session.model');
// Creates a new timetable in the DB.
exports.create = function (req, res) {
  console.log(req.body);
  Session.create(req.body, function (err, session) {

    if (err) {
      res.send(404, err);
    }
    res.json(session);
  });
}


exports.getSession = function (req, res) {
  Session.findOne()
    .where('session').equals(req.params.id)
    .exec(function (err, session) {
      if (err) {
        res.send(404);
      }
      res.json(session);
    });
}
