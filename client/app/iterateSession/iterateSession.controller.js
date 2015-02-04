'use strict';

angular.module('devMashApp')
  .controller('IterateSessionCtrl', function ($scope, $http, $routeParams) {

    $http.get('api/tutorsFights/sessionFights/' + $routeParams.sessionId)
      .success(function (global) {
        console.log('global', global);

        for (var i = 0; i < global.length; i++) {
          $http.post('api/tutorsFights/',
            {
              timetableId: global[i].timetableId,
              tutorPairId: global[i].tutorPairId,
              alpha: global[i].alpha,
              beta: global[i].beta,
              result: global[i].result,
              sessionId: $routeParams.sessionId
            }
          )
            .success(function () {
              console.log('y');
            })
        }


      });


  })
;
