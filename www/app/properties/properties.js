(function () {
  'use strict';

  angular
    .module('app')
    .controller('PropertiesController', PropertiesController);

  PropertiesController.inject = ['config'];
  function PropertiesController(config) {
    var vm = this;

    vm.calculate = calculate;
    vm.decimalPlaces = config.settings.decimalPlaces;
    vm.input = 1;
    vm.prop1 = null;
    vm.prop2 = null;
    vm.result = {};
    vm.substance = 1;
    vm.substanceList = [];

    activate();

    ////////////////

    function activate() {
      return getSubstances();
    };

    function calculate() {
      switch (vm.input) {
        case 1:
          vm.result = NeutriumJS.thermo.IAPWS97.PT.solve(vm.prop1, vm.prop2);
          break;
        case 2:
          vm.result = NeutriumJS.thermo.IAPWS97.PH.solve(vm.prop1, vm.prop2);
          break;
        case 3:
          vm.result = NeutriumJS.thermo.IAPWS97.PS.solve(vm.prop1, vm.prop2);
          break;
        case 4:
          vm.result = NeutriumJS.thermo.IAPWS97.HS.solve(vm.prop1, vm.prop2);
          break;
        default:
          break;
      };
    };

    function getSubstances() {
      var substanceList = [{
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

      vm.substanceList = substanceList;
      return vm.substanceList;
    };
  };
})();
