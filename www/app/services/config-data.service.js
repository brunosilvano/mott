(function () {
    'use strict';

    angular
        .module('app')
        .factory('config', config);

    // config.inject = ['dependency1'];
    function config() {

        var service = {
            getDecimalPlaces: getDecimalPlaces,
            getTemperatureUnit: getTemperatureUnit,
            setDecimalPlaces: setDecimalPlaces,
            setTemperatureUnit: setTemperatureUnit
        };

        var settings = {
            decimalPlaces: '6',
            temperatureUnits: '1'
        };

        // TODO: add localstorage support
        function getDecimalPlaces() {
            return settings.decimalPlaces;
        };

        function getTemperatureUnit() {
            return settings.temperatureUnits;
        };

        function setDecimalPlaces(n) {
            settings.decimalPlaces = n;
        };

        function setTemperatureUnit(n) {
            settings.temperatureUnits = n;
        };

        return service;
    };
})();