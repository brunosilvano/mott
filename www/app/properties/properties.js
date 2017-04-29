(function () {
  'use strict';

  angular
    .module('app')
    .controller('PropertiesController', PropertiesController);

  // PropertiesController.inject = ['dependency1'];
  function PropertiesController() {
    var vm = this;

    vm.input = 1;
    vm.substance = 1;
    vm.substanceList = [{
      id: 1,
      name: 'Água',
      inputs: [{
        id: 1,
        properties: 'p, T'
      }, {
        id: 2,
        properties: 'p, h'
      }, {
        id: 3,
        properties: 'p, s'
      }, {
        id: 4,
        properties: 'h, s'
      }]
    }];
    vm.title = 'Propriedades';


    ///////////////////////////////////////////////////////////////////////////////////

    activate();

    ////////////////

    function activate() {}
  }
})();
