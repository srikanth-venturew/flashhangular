'use strict';

angular.module('flashhAngularApp')
  .controller('LoginCtrl', function($scope, Auth, $state, $window) {
    console.log("LoginCtrl");
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then(function(user) {
          // Logged in, redirect to home
          console.log("user :",user);
          if(user && user.role == 'vendor'){
            $state.go('vendor');  
          }
        })
        .catch(function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
