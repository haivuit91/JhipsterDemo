'use strict';

angular.module('jhipsterDemoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


