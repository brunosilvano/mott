(function () {
  'use strict';

  angular
    .module('app')
    .controller('PropertiesController', PropertiesController);

  PropertiesController.inject = ['config', 'converter', 'inputCache', 'R1234yf'];

  function PropertiesController(config, converter, inputCache, R1234yf) {
    var vm = this;

    vm.calculate = calculate;
    vm.decimalPlaces = config.getDecimalPlaces();
    vm.error = false;
    vm.input = inputCache.input.type || 1;
    vm.prop1 = inputCache.input.prop1;
    vm.prop2 = inputCache.input.prop2;
    vm.result = {};
    vm.setInputType = setInputType;
    vm.substance = inputCache.input.substance || 1;
    vm.substanceList = [];
    vm.units = config.getUnits();

    activate();

    ////////////////

    function activate() {
      getSubstances();
      setInputType();
      calculate();
      return;
    };

    function calculate() {
      inputCache.setData({
        type: vm.input,
        prop1: vm.prop1,
        prop2: vm.prop2,
        substance: vm.substance
      });
      if (vm.prop1 && vm.prop2) {
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
      }
    };

    function convertOutput() {
      try {
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

        vm.error = false;
        console.log(vm.result);
      }
      catch (error) {
        vm.error = true;
      }
    };

    function getSubstances() {
      var substanceList = [{
        id: 1,
        name: 'Água',
        inputs: [{
          id: 1,
          properties: 'p,T',
          prop1: 'Pressão',
          prop2: 'Temperatura'
        }, {
          id: 2,
          properties: 'p,h',
          prop1: 'Pressão',
          prop2: 'Entalpia'
        }, {
          id: 3,
          properties: 'p,s',
          prop1: 'Pressão',
          prop2: 'Entropia'
        }, {
          id: 4,
          properties: 'h,s',
          prop1: 'Entalpia',
          prop2: 'Entropia'
        }]
      }, {
        id: 2,
        name: 'R1234yf',
        inputs: [{
          id: 1,
          properties: 'rho,T',
          prop1: 'Densidade',
          prop2: 'Temperatura'
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
      vm.inputType = vm.substanceList[vm.substance - 1].inputs[vm.input - 1].properties.toLowerCase().split(',');
      // calculate();
    };

  };
})();
