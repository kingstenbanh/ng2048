'use strict';

angular
  .module('Keyboard', [])
  .service('keyboardService', keyboardService);

function keyboardService($document) {
  var UP    = 'up',
      RIGHT = 'right',
      DOWN  = 'down',
      LEFT  = 'left';

  var keyboardMap = {
    37: LEFT,
    38: UP,
    39: RIGHT,
    40: DOWN
  };

  function init() {
    var self = this;
    this.keyEventHandlers = [];
    $document.bind('keydown', function(evt) {
      var key = keyboardMap[evt.which];

      if (key) {
        // An interesting key was pressed
        evt.preventDefault();
        self._handleKeyEvent(key, evt);
      }
    });
  }

  function on(cb) {
    this.keyEventHandlers.push(cb);
  }

  function _handleKeyEvent(key, evt) {
    var callbacks = this.keyEventHandlers;
    if (!callbacks) {
      return;
    }

    evt.preventDefault();

    if (callbacks) {
      for (var x = 0; x < callbacks.length; x++) {
        var cb = callbacks[x];
        cb(key, evt);
      }
    }
  }

  var service = {
    init: init,
    on: on,
    _handleKeyEvent: _handleKeyEvent
  };

  return service;

}
