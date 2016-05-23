'use strict';

angular.module('devMashApp')
  .controller('HighscoreCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

    $scope.globalHighscore = [];
    $scope.localHighscore = [];

    $scope.show = false;
    $scope.session = true;


    $scope.clickShow = function () {
      $scope.show = true;
    }

    $scope.homepage = function () {
      $location.path('/');
    };


    $scope.data = {text: ''};


    $scope.sendData = function () {

      console.log($scope.data.text);
      if (typeof $routeParams.sessionId !== undefined) {
        $http.post('/api/sessions', {session: $routeParams.sessionId, text: $scope.data.text})
          .success(function (data) {
            console.log('X', data);
            $scope.show = true;
          })
          .error(function (err) {
            $scope.show = true;
          });
      }
    }

    if (typeof $routeParams.sessionId !== undefined) {

      $http.get('api/sessions/' + $routeParams.sessionId)
        .success(function (data) {
          console.log(data);
          if (data) {
            $scope.show = true;
          }

        }).error(function () {
        $scope.show = true;
        $scope.session = false;
      });
    }
    else {
      $scope.show = true;
      $scope.session = false;
    }

    if (typeof $routeParams.timetableId !== undefined) {

      $http.get('api/tutors/highscore/' + $routeParams.timetableId)
        .success(function (local) {

          console.log('local', local);
          var max = local[0].points;
          var min = local[local.length - 1].points;
          for (var i = 0; i < local.length; i++) {
            local[i].percent = parseInt(100 * (local[i].points - min) / (max - min));
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
            local[i].percent = parseInt(100 * (local[i].points - min) / (max - min));
          }
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
            local[i].percent = parseInt(100 * (local[i].points - min) / (max - min));
          }

          $scope.localHighscore = local
        });

    }
  }
  ])
;


