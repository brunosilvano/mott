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
        vm.unit = {
            t: 'tempK',
            p: 'MPa',
            rho: 'kg/m^3',
            v: 'm^3/kg',
            u: 'kJ/kg',
            s: 'kJ kg^-1 K^-1',
            h: 'kJ/kg',
            cp: 'kJ kg^-1 K^-1',
            cv: 'kJ kg^-1 K^-1',
            w: 'm/s'
        };

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
