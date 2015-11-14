'use strict';

angular.module('devMashApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/homepage/homepage.html',
        controller: 'HomepageCtrl'
      });
  });
