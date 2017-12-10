'use strict';

angular.module('flashhAngularApp')
  .factory('User', function ($resource,API_URL) {
    return $resource(API_URL+'/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
