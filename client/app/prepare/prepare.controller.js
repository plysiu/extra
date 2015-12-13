'use strict';

angular.module('devMashApp')
  .controller('PrepareCtrl', function ($scope, $http, $location, $interval, $log) {
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
     * @type {{value: null}}
     */
    $scope.grade = {
      value: null
    };

    $http.get('https://devplan.uek.krakow.pl/api/groups')
      .success(function (data) {
        $scope.groups = data;
        console.log('Grupy zostały pobrane.', data);
      }).error(function () {
        alert('Wystąpił błąd podczas pobierania danych, sprawdz połączenie internetowe i odśwież strone.');
      });
    /**
     *
     * @param id
     */
    $scope.getTimetableId = function (id) {
      $http.post('/api/timetables', {id: id})
        .success(function (data) {
          $scope.timetable = data;
        }).error(function () {
          alert('Wystąpił błąd podczas zapytania, sprawdź połączenie internetowe i odśwież strone.');
        });
    };

    $scope.validateGroupName = function () {
      $scope.timetable = null;
      $scope.disabled = true;
      for (var i = 0; i < $scope.groups.length; i++) {
        if ($scope.groups[i].name.toLowerCase() == $scope.query.name.toLowerCase()) {
          $scope.getTimetableId($scope.groups[i].id);
          $scope.disabled = false;
        }
      }
    };

    $scope.compareTutors = function () {
      $location.path('compare/tutors/' + $scope.timetable._id + '/' + $scope.grade.value);
    };

    $scope.showHighscore = function () {
      $location.path('highscore/' + $scope.timetable._id);
    };
  });
