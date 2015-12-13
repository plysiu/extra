'use strict';

angular.module('devMashApp')
  .controller('HighscoreCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.globalHighscore = [];

    $scope.localHighscore = [];

    if (typeof $routeParams.timetableId !== 'undefined') {

      $http.get('api/tutors/highscore/' + $routeParams.timetableId)
        .success(function (global) {
          console.log('global', global);
          $scope.globalHighscore = global;
        });
    }
    //} else {
      $http.get('api/tutors/highscore')
        .success(function (global) {
          console.log('global', global);
          $scope.highscore = global;
        });
 //   }
    if (typeof $routeParams.sessionId !== 'undefined') {

      $http.get('api/tutors/highscore/' + $routeParams.timetableId + '/' + $routeParams.sessionId)
        .success(function (local) {
          console.log('local', local);
          $scope.localHighscore = local;
        });

    }
  }]);


