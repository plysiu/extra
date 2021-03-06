'use strict';

angular.module('devMashApp')
  .controller('CompareTutorsCtrl', ['$scope', '$http', '$routeParams', '$location', '$timeout', '$log',
    function ($scope, $http, $routeParams, $location, $timeout, $log) {
      /**
       *
       * @type {Array}
       */
      $scope.tutorsPairs = [];
      $scope.votedTutorsPairs = [];
      /**
       *
       */
      $scope.max = 0;
      $scope.progress = 0;
      /**
       *
       * @type {{}}
       */
      $scope.fight = {};
      /**
       *
       * @type {null}
       */
      $scope.sessionId = 0;

      /**
       *
       * @type {boolean}
       */
      $scope.locked = true;
      /**
       *
       */
      $http.get('api/tutorPairs/' + $routeParams.timetableId)
        .success(function (data) {
          $scope.tutorsPairs = data.tutorsPairs;
          $scope.max = data.tutorsPairs.length;
          $scope.sessionId = data.sessionId;

          $scope.fight = $scope.tutorsPairs.shift();
          $scope.locked = false;
        }).error(function () {
        alert('Wystąpił błąd podczas pobierania par prowadzących. Odśwież strone i spróbuj ponownie.');
      });
      /**
       *
       */
      $scope.setNextPair = function () {
        if ($scope.tutorsPairs.length === 0) {
          $location.path('highscore/' + $routeParams.timetableId + '/' + $scope.sessionId);
        } else {
          $scope.fight = $scope.tutorsPairs.shift();
          $scope.locked = false;
        }
        $scope.progress++;
      };

      $scope.lastVote = 0;

      $scope.checkDelayBetweenVotes = function () {
        return $scope.lastVote + 250 <= new Date().getTime();
      }

      $scope.castTheVote = function (result) {
        if (
          $scope.elapsedSinceLastVote() > 250 &&
          ( result !== 0 || result !== 1 || result !== 2 )) {

          $scope.locked = true;
          $scope.lastVote = new Date().getTime();


          $http.post('api/tutorsFights/', {
            timetableId: $scope.fight.timetableId._id,
            tutorPairId: $scope.fight._id,
            alpha: $scope.fight.alpha._id,
            beta: $scope.fight.beta._id,
            result: result,
            sessionId: $scope.sessionId,
            grade: $routeParams.grade
          })
            .success(function (data) {
              console.log('Głos wysłany. Zostało par: ' + $scope.tutorsPairs.length);
              $scope.votedTutorsPairs.unshift({
                result: result,
                fight: $scope.fight
              });

              $timeout(function () {
                $scope.setNextPair();
              }, 250 - $scope.elapsedSinceLastVote());

            })
            .error(function () {
              alert('Wystąpił błąd podczas wysyłania głosu. Odśwież strone i spróbuj ponownie.');
            });
        }
      };


      $scope.elapsedSinceLastVote = function () {
        return new Date().getTime() - $scope.lastVote;
      };

      $scope.goToHighscore = function () {
        $location.path('highscore/' + $routeParams.timetableId + '/' + $scope.sessionId);
      };

      $scope.result = function (x, y) {
        return x === y;
      };

      $scope.getPercentages = function () {
        return Math.floor(($scope.progress / $scope.max ) * 100);
      };
    }]);
