(function () {
  'use strict';

  angular
    .module('app')
    .controller('PropertiesController', PropertiesController);

  // PropertiesController.inject = ['dependency1'];
  function PropertiesController() {
    var vm = this;

    vm.title = 'Propriedades';
    vm.substance = 1;
    vm.substanceList = [{
      id: 1,
      name: 'Água'
    }];

    console.log(NeutriumJS.thermo.IAPWS97.PT.solve(0.5, 1500));

    ///////////////////////////////////////////////////////////////////////////////////

    activate();

    ////////////////

    function activate() {}
  }
})();
