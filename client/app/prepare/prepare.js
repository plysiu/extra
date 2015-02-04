'use strict';

angular.module('devMashApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/prepare', {
        templateUrl: 'app/prepare/prepare.html',
        controller: 'PrepareCtrl'
      });
  });
