'use strict';

describe('Controller: IterateSessionCtrl', function () {

  // load the controller's module
  beforeEach(module('devMashApp'));

  var IterateSessionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IterateSessionCtrl = $controller('IterateSessionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
