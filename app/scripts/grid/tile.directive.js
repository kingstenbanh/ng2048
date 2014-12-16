'use strict';

angular
  .module('Grid')
  .directive('tile', tile);

function tile() {
  var directive = {
    restrict: 'A',
    scope: {
      ngModel: '='
    },
    templateUrl: 'scripts/grid/tile.template.html'
  };
  return directive;
}
