(function () {
  'use strict';

  angular.module('app')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('app', {
        url: '/',
        templateUrl: 'app/properties/properties.html',
        controller: 'PropertiesController',
        controllerAs: 'vm'
      })

    ;

  };
})();
