(function () {
    'use strict';

    angular
        .module('app')
        .controller('ConfigController', ConfigController);

    ConfigController.inject = ['config'];
    function ConfigController(config) {
        var vm = this;

        vm.decimalPlaces = config.getDecimalPlaces();
        vm.save = save;
        vm.temperatureUnit = config.getTemperatureUnit();

        activate();

        ////////////////

        function activate() {
        };

        function save() {
            config.setDecimalPlaces(vm.decimalPlaces);
            config.setTemperatureUnit(vm.temperatureUnit);
        };
    };
})();
