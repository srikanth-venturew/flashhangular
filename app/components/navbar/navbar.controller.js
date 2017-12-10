'use strict';

angular.module('flashhAngularApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    console.log("NavbarCtrl");
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
