'use strict';

angular.module('devMashApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/iterateSession/:sessionId', {
        templateUrl: 'app/iterateSession/iterateSession.html',
        controller: 'IterateSessionCtrl'
      });
  });
