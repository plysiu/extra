'use strict';

describe('Controller: PrepareCtrl', function () {

  // load the controller's module
  beforeEach(module('devMashApp'));

  var PrepareCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrepareCtrl = $controller('PrepareCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
