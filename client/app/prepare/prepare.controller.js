'use strict';

angular.module('devMashApp')
  .controller('PrepareCtrl', function ($scope, $http, $location, $interval, $log, $q, $timeout) {
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


    $http.get('https://api.uekplan.pl/groups')
      .success(function (data) {
        console.log('Grupy zostały pobrane.', data.groups.length);

        data.groups.forEach(function (element) {
          $scope.groups.push({
            display: element.key,
            id: element.id
          });
        });


        $timeout(function () {
          $('#kurwa').focus();
        }, 100);

      })
      .error(function () {
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

            $scope.timetable = data

          }).error(function () {
          alert('Wystąpił błąd podczas zapytania, sprawdź połączenie internetowe i odśwież strone.');
        });
      }
    };


    $scope.validateGroupName = function (selectedItem) {

      console.log(selectedItem);
      if ( selectedItem !== null ) {
        $scope.getTimetableId(selectedItem.id);
      }else{
        $scope.timetable = null;

      }

    }


  });
