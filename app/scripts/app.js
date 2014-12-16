'use strict';

angular
.module('twentyfourtyeightApp', ['Game', 'Grid', 'Keyboard', 'ngAnimate', 'ngCookies'])
.config(function(GridServiceProvider) {
  GridServiceProvider.setSize(4);
})
.controller('GameController', function(GameManager, keyboardService) {

  this.game = GameManager;

  this.newGame = function() {
    keyboardService.init();
    this.game.newGame();
    this.startGame();
  };

  this.startGame = function() {
    var self = this;
    keyboardService.on(function(key) {
      self.game.move(key);
    });
  };

  this.newGame();
});
