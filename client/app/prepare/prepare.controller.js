'use strict';

angular.module('devMashApp')
  .controller('PrepareCtrl', function ($scope, $http, $location) {
    /**
     *
     * @type {{name: string}}
     */
    $scope.query = {
      name: ''
    };
    /**
     *
     * @type {Array}
     */
    $scope.groups = [];
    /**
     *
     */
    $http.get('http://devplan.uek.krakow.pl/api/groups')
      .success(function (data) {
        $scope.groups = data;
        console.log('Grupy zostały pobrane.', data);
      }).error(function () {
        alert('Wystąpił błąd podczas pobierania danych, sprawdz połączenie internetowe i odśwież strone.');
      });
    /**
     *
     * @type {null}
     */
    $scope.timetable = null;
    /**
     *
     * @type {boolean}
     */
    $scope.disabled = true;
    /**
     *
     * @param id
     */
    $scope.getTimetableId = function (id) {
      $http.post('/api/timetables', {id: id})
        .success(function (data) {
          $scope.timetable = data;
          console.log(data);
        }).error(function () {
          alert('Wystąpił błąd podczas zapytania, sprawdz połączenie internetowe i odśwież strone.');
        });
    };
    /**
     *
     */
    $scope.validateGroupName = function () {
      $scope.timetable = null;
      $scope.disabled = true;
      for (var i = 0; i < $scope.groups.length; i++) {
        if ($scope.groups[i].name.toLowerCase() == $scope.query.name.toLowerCase()) {
          $scope.disabled = false;
          $scope.getTimetableId($scope.groups[i].id);
        }
      }
    };
    /**
     *
     */
    $scope.compareTutors = function () {
      $location.path('compare/tutors/' + $scope.timetable._id);
    };
    /**
     *
     */
    $scope.showHighscore = function () {
      $location.path('highscore/' + $scope.timetable._id);
    };

  });
