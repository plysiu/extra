'use strict';

angular.module('devMashApp')
  .controller('CompareTutorsCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    /**
     *
     * @type {Array}
     */
    console.log('bower install angular-unsavedChanges --save.');
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
        $scope.locked = false;
        $scope.fight = $scope.tutorsPairs.shift();
      }
    };
    /**
     *
     * @returns {string}
     */
    $scope.getStyle = function () {
      switch ($scope.progress % 5) {
        case 0:
          console.log(0);
          return 'btn-success';
        case 1:
          console.log(1);

          return 'btn-primary';
        case 2:
          console.log(2);

          return 'btn-danger';
        case 3:
          console.log(3);
          return 'btn-warning';
        case 4:
          return 'btn-info';
      }
    };
    /**
     *
     * @param id
     */
    $scope.lastVote = 0;
    /**
     *
     * @returns {boolean}
     */
    $scope.checkDelayBetweenVotes = function () {
      return $scope.lastVote + 300 <= new Date().getTime();
    }
    /**
     *
     * @param result
     */
    $scope.castTheVote = function (result) {
      if ($scope.checkDelayBetweenVotes() &&
        ( result !== 0 ||
        result !== 1 ||
        result !== 2
        )) {

        $scope.locked = true;
        $scope.lastVote = new Date().getTime();


        var data = {
          timetableId: $scope.fight.timetableId._id,
          tutorPairId: $scope.fight._id,
          alpha: $scope.fight.alpha._id,
          beta: $scope.fight.beta._id,
          result: result,
          sessionId: $scope.sessionId
        };

        $http.post('api/tutorsFights/', data)
          .success(function () {
            console.log('Głos wysłany. Zostało par: ' + $scope.tutorsPairs.length);

            $scope.votedTutorsPairs.unshift({
              style:  $scope.getStyle(),
              result: result,
              fight: $scope.fight
            });

            $scope.progress++;

            $scope.setNextPair();
          }).error(function () {
            alert('Wystąpił błąd podczas wysyłania głosu. Odśwież strone i spróbuj ponownie.');
          });
      }
    };

    /**
     *
     */
    $scope.goToHighscore = function () {
      $location.path('highscore/' + $routeParams.timetableId + '/' + $scope.sessionId);
    }

    $scope.result = function (x, y) {
      return x === y;
    }
    $scope.getPercentages = function () {
      return Math.floor(($scope.progress / $scope.max ) * 100) + '%';
    };



  }]);
