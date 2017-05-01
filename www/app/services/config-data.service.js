(function () {
    'use strict';

    angular
        .module('app')
        .factory('config', config);

    // config.inject = ['dependency1'];
    function config() {
        var service = {
            settings: {
                decimalPlaces: '6',
                temperatureUnit: '1'
            }
        };

        return service;
    };
})();