'use strict';

angular.module('devMashApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.query = '';

    $scope.groups = [];

    $scope.awesomeThings = [];

    $http.get('http://devplan.uek.krakow.pl/api/groups').success(function(respond) {
      $scope.groups = respond;
    });



    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
