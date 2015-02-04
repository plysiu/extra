'use strict';

angular.module('devMashApp')
  .controller('HighscoreCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.globalHighscore = [];

    $scope.localHighscore = [];

    $scope.randomHighscore = [];

    $http.get('api/tutors/highscore/' + $routeParams.timetableId)
      .success(function (global) {
        console.log('global', global);
        $scope.globalHighscore = global;
      });


    $http.get('api/tutors/random/' + $routeParams.timetableId)
      .success(function (random) {
        console.log('random', random);
        $scope.fights = random.fights;
        $scope.randomHighscore = random.tutors;
      });

    if (typeof $routeParams.sessionId !== 'undefined') {

      $http.get('api/tutors/highscore/' + $routeParams.timetableId + '/' + $routeParams.sessionId)
        .success(function (local) {
          console.log('local', local);
          $scope.localHighscore = local;
        });

    }


  }]);


