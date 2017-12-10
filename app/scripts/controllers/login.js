'use strict';

/**
 * @ngdoc function
 * @name flashhAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flashhAngularApp
 */
angular.module('flashhAngularApp')
  .controller('LoginCtrl', function (authentication,$location) {
    var vm = this;
    vm.pageHeader = {
      title: 'Sign in to Loc8r'
    };

    vm.credentials = {
      email : "",
      password : ""
    };

    vm.onSubmit = function () {
        vm.formError = "";
        if (!vm.credentials.email || !vm.credentials.password) {
          vm.formError = "All fields required, please try again";
          return false;
        } else {
          vm.doLogin();
        }
    };

    vm.doLogin = function() {
      vm.formError = "";
      authentication
        .login(vm.credentials)
        .then(function(data){
          if(data && data.status == "success"){
            //Redirect to dashboard based on user role.
            if(data.data.user.role == 'vendor'){
              //vendor dashboard
              $location.path('/vendorDashboard');
            }
          }
          else if(data && data.status == "failure"){
            console.log("error logging In :",data);  
            vm.formError = data.message;
          }
          else{
            vm.formError = "error contacting server :";
            console.log("error contacting server :");   
          }
        });
     };

});
