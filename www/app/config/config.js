(function () {
    'use strict';

    angular
        .module('app')
        .controller('ConfigController', ConfigController);

    ConfigController.inject = ['config'];
    function ConfigController(config) {
        var vm = this;

        vm.decimalPlaces = '6';
        vm.save = save;

        activate();

        ////////////////

        function activate() {
        };

        function save() {
            config.settings.decimalPlaces = vm.decimalPlaces;
        };
    };
})();
