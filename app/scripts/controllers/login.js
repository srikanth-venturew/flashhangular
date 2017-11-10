'use strict';

/**
 * @ngdoc function
 * @name flashhAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flashhAngularApp
 */
angular.module('flashhAngularApp')
  .controller('LoginCtrl', function (authentication) {
    console.log("login controller");
     this.onSubmit = function () {
      this.formError = "";
      if (!this.credentials.email || !this.credentials.password) {
        this.formError = "All fields required, please try again";
        return false;
      } else {
        this.doLogin();
      }
    };

    this.doLogin = function() {
      this.formError = "";
      authentication
        .login(this.credentials)
        .error(function(err){
          this.formError = err;
        })
        .then(function(){
          //$location.search('page', null); 
          //$location.path(vm.returnPage);
          console.log("successfully loggedIn");
        });
    };

  });
