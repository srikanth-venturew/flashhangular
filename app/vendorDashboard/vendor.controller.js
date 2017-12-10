'use strict';

/**
 * @ngdoc function
 * @name flashhAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flashhAngularApp
 */
angular.module('flashhAngularApp')
  .controller('VendorCtrl', [function () {
  	console.log('vendor logged In');
    var vm = this;
    vm.pageHeader = {
      title: 'Welcome to vendor dashboard'
    };
}]);