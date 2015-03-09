'use strict';

angular.module('devMashApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/highscore/:timetableId/:sessionId', {
        templateUrl: 'app/highscore/highscore.html',
        controller: 'HighscoreCtrl'
      })
      .when('/highscore/:timetableId', {
        templateUrl: 'app/highscore/highscore.html',
        controller: 'HighscoreCtrl'
      })
      .when('/highscore', {
        templateUrl: 'app/highscore/highscore.html',
        controller: 'HighscoreCtrl'
      });
  });
