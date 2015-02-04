'use strict';

describe('Controller: CompareTutorsCtrl', function () {

  // load the controller's module
  beforeEach(module('devMashApp'));

  var CompareTutorsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompareTutorsCtrl = $controller('CompareTutorsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
