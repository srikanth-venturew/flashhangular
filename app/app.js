'use strict';

/**
 * @ngdoc overview
 * @name flashhAngularApp
 * @description
 * # flashhAngularApp
 *
 * Main module of the application.
 */
angular
  .module('flashhAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .factory('authInterceptor', function($rootScope, $q, $cookies, $injector) {
    var state;
    return {
      // Add authorization token to headers
      request: function(config) {
        config.headers = config.headers || {};
        if ($cookies.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookies.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if (response.status === 401) {
          (state || (state = $injector.get('$state'))).go('login');
          // remove any stale tokens
          $cookies.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  }).run(function($rootScope, $state, Auth) {
    console.log("logged In");
    // Redirect to login if route requires auth and the user is not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
      if (next.authenticate) {
        Auth.isLoggedIn(function(loggedIn) { 
          if (!loggedIn) {
            event.preventDefault();
            $state.go('login');
          }
        });
      }
    });
  });

  // .run(function($rootScope, $state, Auth) {
  //    console.log("check user login here ");
   //    Auth.isLoggedIn(function(loggedIn) {
   //        if (!loggedIn) {
   //          event.preventDefault();
   //          $state.go('login');
   //        }
   //        else{
   //          Auth.getCurrentUser(function(user){
   //            if(user && user.role){
   //              console.log("logged In User :",user);
   //              if(user.role == 'vendor'){
   //                $state.go('vendor');
   //              }
   //            }
   //            else{
   //             console.log("logged In User or role not found:"); 
   //              $state.go('main');
   //            }
   //          }).catch(function (err) {
   //            console.log("user logged In :",err);  
   //          });
   //        }
   // });
    // Redirect to login if route requires auth and the user is not logged in
  //   $rootScope.$on('$stateChangeStart', function(event, next) {
  //     if (next.authenticate) {
  //       Auth.isLoggedIn(function(loggedIn) {
  //         if (!loggedIn) {
  //           event.preventDefault();
  //           $state.go('login');
  //         }
  //       });
  //     }
  //     // Redirect to dashboard if valid auth token is available and user is in an unauthenticated page (login may be)
  //     if(!next.$$route.authenticated && userAuth) {
  //          $location.path('/dashboard');
  //     }
  //   });
  // });





