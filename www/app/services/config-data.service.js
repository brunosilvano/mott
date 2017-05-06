(function () {
    'use strict';

    angular
        .module('app')
        .factory('config', config);

    // config.inject = ['dependency1'];
    function config() {

        var service = {
            getDecimalPlaces: getDecimalPlaces,
            setDecimalPlaces: setDecimalPlaces,
            getUnits: getUnits,
            setUnits: setUnits
        };

        var settings = angular.fromJson(localStorage.getItem("configData")) || {
            decimalPlaces: '6',
            units: {
                t: 'tempK',
                p: 'MPa',
                rho: 'kg/m^3',
                v: 'm^3/kg',
                u: 'kJ/kg',
                s: 'kJ/kg degK',
                h: 'kJ/kg',
                cp: 'kJ/kg degK',
                cv: 'kJ/kg degK',
                w: 'm/s'
            }
        };

        function getDecimalPlaces() {
            return settings.decimalPlaces;
        };

        function getUnits() {
            return settings.units;
        };

        function setDecimalPlaces(n) {
            settings.decimalPlaces = n;
            localStorage.setItem("configData", angular.toJson(settings));
        };

        function setUnits(units) {
            settings.units = units;
            localStorage.setItem("configData", angular.toJson(settings));
        };

        return service;
    };
})();