(function () {
  'use strict';

  angular.module('app')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/calculate');

    $stateProvider

      .state('calculate', {
        url: '/calculate',
        templateUrl: 'app/properties/properties.html',
        controller: 'PropertiesController',
        controllerAs: 'vm'
      })

      .state('config', {
        url: '/config',
        templateUrl: 'app/config/config.html',
        controller: 'ConfigController',
        controllerAs: 'vm',
        cache: false
      })

    ;

  };
})();
