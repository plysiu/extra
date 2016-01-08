'use strict';

angular.module('devMashApp')
  .controller('HighscoreCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.globalHighscore = [];

    $scope.localHighscore = [];

    if (typeof $routeParams.timetableId !== 'undefined') {

      $http.get('api/tutors/highscore/' + $routeParams.timetableId)
        .success(function (local) {

          console.log('local', local);
          var max = local[0].points;
          var min = local[local.length - 1].points;
          for (var i = 0; i < local.length; i++) {
            local[i].percent =parseInt( 100 * (local[i].points - min) / (max - min));
          }
          $scope.globalHighscore = local;
        });
    }

    else {
      $http.get('api/tutors/highscore')
        .success(function (local) {

          console.log('local', local);
          var max = local[0].points;
          var min = local[local.length - 1].points;
          for (var i = 0; i < local.length; i++) {
            local[i].percent =parseInt( 100 * (local[i].points - min) / (max - min));          }
          $scope.highscore = local;
        });
    }
    if (typeof $routeParams.sessionId !== 'undefined') {

      $http.get('api/tutors/highscore/' + $routeParams.timetableId + '/' + $routeParams.sessionId)
        .success(function (local) {

          console.log('local', local);
          var max = local[0].points;
          var min = local[local.length - 1].points;
          for (var i = 0; i < local.length; i++) {
            local[i].percent =parseInt( 100 * (local[i].points - min) / (max - min));          }

          $scope.localHighscore = local;
        });

    }
  }])
;


