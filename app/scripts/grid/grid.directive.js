'use strict';

angular
  .module('Grid')
  .directive('grid', grid);

function grid() {
  var directive = {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      ngModel: '='
    },
    templateUrl: 'scripts/grid/grid.template.html'
  };
  return directive;
}
