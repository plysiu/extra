'use strict';

describe('Controller: HighscoreCtrl', function () {

  // load the controller's module
  beforeEach(module('devMashApp'));

  var HighscoreCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HighscoreCtrl = $controller('HighscoreCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
