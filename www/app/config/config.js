(function () {
    'use strict';

    angular
        .module('app')
        .controller('ConfigController', ConfigController);

    ConfigController.inject = ['config'];
    function ConfigController(config) {
        var vm = this;

        vm.decimalPlaces = config.settings.decimalPlaces;
        vm.save = save;
        vm.temperatureUnit = config.settings.temperatureUnit;

        activate();

        ////////////////

        function activate() {
        };

        function save() {
            config.settings.decimalPlaces = vm.decimalPlaces;
            config.settings.temperatureUnit = vm.temperatureUnit;
        };
    };
})();
