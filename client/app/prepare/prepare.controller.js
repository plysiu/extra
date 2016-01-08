'use strict';

angular.module('devMashApp')
  .controller('PrepareCtrl', function ($scope, $http, $location, $interval, $log, $q) {
    /**
     *
     * @type {{name: string}}
     */
    $scope.searchText = '';
    $scope.selectedItem = {
      id: null,
      display: ''
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


    $http.get('https://devplan.uek.krakow.pl/api/groups')
      .success(function (data) {
        console.log('Grupy zostały pobrane.', data.length);
        for (var i = 0; i < data.length; i++) {
          if (data[i].category === 1) {
            $scope.groups[$scope.groups.length + 1] = {
              display: data[i].name,
              id: data[i].id
            };
          }
        }
      }).error(function () {
      alert('Wystąpił błąd podczas pobierania danych, sprawdz połączenie internetowe i odśwież strone.');
    });
    /**
     *
     * @param id
     */
    $scope.getTimetableId = function (data) {
      if (typeof data === 'object') {

        $http.post('/api/timetables', {id: data.id})
          .success(function (data) {
            console.log(data);
            $scope.timetable = data;
          }).error(function () {
          alert('Wystąpił błąd podczas zapytania, sprawdź połączenie internetowe i odśwież strone.');
        });
      }
    };

    $scope.validateGroupName = function (id) {
      $scope.timetable = null;
      $scope.disabled = true;
      $scope.getTimetableId(id);
      $scope.disabled = false;
    };


  });
