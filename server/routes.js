/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/tutorsFights', require('./api/tutorsFight'));
  app.use('/api/tutorPairs', require('./api/tutorPair'));
  app.use('/api/tutors', require('./api/tutor'));
  app.use('/api/timetables', require('./api/timetable'));
  app.use('/api/sessions', require('./api/session'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
