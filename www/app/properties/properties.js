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
        properties: 'p, T',
        prop1: 'Pressão',
        prop2: 'Temperatura'
      }, {
        id: 2,
        properties: 'p, h',
        prop1: 'Pressão',
        prop2: 'Entalpia'
      }, {
        id: 3,
        properties: 'p, s',
        prop1: 'Pressão',
        prop2: 'Entropia'
      }, {
        id: 4,
        properties: 'h, s',
        prop1: 'Entalpia',
        prop2: 'Entropia'
      }]
    }];
    vm.title = 'Propriedades';


    ///////////////////////////////////////////////////////////////////////////////////

    activate();

    ////////////////

    function activate() {}
  }
})();
