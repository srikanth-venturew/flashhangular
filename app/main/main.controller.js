'use strict';

/**
 * @ngdoc function
 * @name flashhAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flashhAngularApp
 */
angular.module('flashhAngularApp')
  .controller('MainCtrl', function () {
  	console.log("MainCtrl");
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
