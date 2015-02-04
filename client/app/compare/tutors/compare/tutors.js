'use strict';

angular.module('devMashApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/compare/tutors/:timetableId', {
        templateUrl: 'app/compare/tutors/compare/tutors.html',
        controller: 'CompareTutorsCtrl'
      });
  });
