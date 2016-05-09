'use strict';

angular.module('devMashApp')
  .controller('PrepareCtrl', function ($scope, $http, $location, $interval, $log, $q) {
    /**
     *
     * @type {{name: string}}
     */
    $scope.searchText = '';
    $scope.selectedItem = null;
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


    $http.get('http://api.uekplan.pl/groups')
      .success(function (data) {
        console.log('Grupy zostały pobrane.', data.length);

        data.forEach(function(element) {
          $scope.groups.push({
          display: element.key,
          id: element.id
        });
      })

      }).error(function () {
      alert('Wystąpił błąd podczas pobierania danych, sprawdz połączenie internetowe i odśwież strone.');
    });
    /**
     *
     * @param id
     */
    $scope.getTimetableId = function (id) {
      console.log('x;,', id, typeof id);

      if (typeof id === 'number') {
        $http.post('/api/timetables', {id: id})
          .success(function (data) {
            console.log(data);
            $scope.timetable = data;
          }).error(function () {
          alert('Wystąpił błąd podczas zapytania, sprawdź połączenie internetowe i odśwież strone.');
        });
      }
    };


    $scope.validateGroupName = function (selectedItem) {
      if (typeof selectedItem === 'object' && $scope.searchText.length > 0) {
        $scope.searchText = selectedItem.display;
        $scope.timetable = null;
        $scope.disabled = true;
        $scope.getTimetableId(selectedItem.id);
        $scope.disabled = false;
      }

    }


  });
