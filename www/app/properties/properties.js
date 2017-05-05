(function () {
  'use strict';

  angular
    .module('app')
    .controller('PropertiesController', PropertiesController);

  PropertiesController.inject = ['config', 'converter'];
  function PropertiesController(config, converter) {
    var vm = this;

    vm.calculate = calculate;
    vm.decimalPlaces = config.getDecimalPlaces();
    vm.input = 1;
    vm.prop1 = null;
    vm.prop2 = null;
    vm.result = {};
    vm.setInputType = setInputType;
    vm.substance = 1;
    vm.substanceList = [];

    vm.units = config.getUnits();

    activate();

    ////////////////

    function activate() {
      getSubstances();
      setInputType();
      return;
    };

    function calculate() {
      switch (vm.input) {
        case 1:
          var prop1 = converter.convert(vm.prop1, vm.units.p, 'MPa');
          var prop2 = converter.convert(vm.prop2, vm.units.t, 'tempK');
          vm.result = getWaterPop('PT', prop1, prop2);
          convertOutput();
          break;
        case 2:
          var prop1 = converter.convert(vm.prop1, vm.units.p, 'MPa');
          var prop2 = converter.convert(vm.prop2, vm.units.h, 'kJ/kg');
          vm.result = getWaterPop('PH', prop1, prop2);
          convertOutput();
          break;
        case 3:
          var prop1 = converter.convert(vm.prop1, vm.units.p, 'MPa');
          var prop2 = converter.convert(vm.prop2, vm.units.s, 'kJ/kg degK');
          vm.result = getWaterPop('PS', prop1, prop2);
          convertOutput();
          break;
        case 4:
          var prop1 = converter.convert(vm.prop1, vm.units.h, 'kJ/kg');
          var prop2 = converter.convert(vm.prop2, vm.units.s, 'kJ/kg degK');
          vm.result = getWaterPop('HS', prop1, prop2);
          convertOutput();
          break;
        default:
          break;
      };
    };

    function convertOutput() {
      vm.result.t = converter.convert(vm.result.t, 'tempK', vm.units.t);
      vm.result.p = converter.convert(vm.result.p, 'MPa', vm.units.p);
      vm.result.rho = converter.convert(vm.result.rho, 'kg/m^3', vm.units.rho);
      vm.result.v = converter.convert(vm.result.v, 'm^3/kg', vm.units.v);
      vm.result.u = converter.convert(vm.result.u, 'kJ/kg', vm.units.u);
      vm.result.s = converter.convert(vm.result.s, 'kJ/kg degK', vm.units.s);
      vm.result.h = converter.convert(vm.result.h, 'kJ/kg', vm.units.h);
      vm.result.cp = converter.convert(vm.result.cp, 'kJ/kg degK', vm.units.cp);
      vm.result.cv = converter.convert(vm.result.cv, 'kJ/kg degK', vm.units.cv);
      vm.result.w = converter.convert(vm.result.w, 'm/s', vm.units.w);
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

    function getWaterPop(inputType, prop1, prop2) {
      var result = null;
      try {
        result = NeutriumJS.thermo.IAPWS97[inputType].solve(prop1, prop2);
      }
      catch (error) {
        result = null;
      }
      return result;
    };

    function setInputType() {
      vm.inputType = vm.substanceList[vm.substance - 1].inputs[vm.input - 1].properties.toLowerCase().replace(/,\s/, '');
    };

  };
})();
