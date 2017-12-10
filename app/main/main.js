'use strict';

/**
 * @ngdoc function
 * @name flashhAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flashhAngularApp
 */
angular.module('flashhAngularApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
    });
});


