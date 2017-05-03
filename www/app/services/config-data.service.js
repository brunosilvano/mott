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

        var settings = {
            decimalPlaces: '6',
            units: {
                t: 'tempK',
                p: 'MPa',
                rho: 'kg/m^3',
                v: 'm^3/kg',
                u: 'kJ/kg',
                s: 'kJ kg^-1 degK^-1',
                h: 'kJ/kg',
                cp: 'kJ kg^-1 degK^-1',
                cv: 'kJ kg^-1 degK^-1',
                w: 'm/s'
            }
        };

        // TODO: add localstorage support
        function getDecimalPlaces() {
            return settings.decimalPlaces;
        };

        function getUnits() {
            return settings.units;
        };

        function setDecimalPlaces(n) {
            settings.decimalPlaces = n;
        };

        function setUnits(units) {
            settings.units = units;
        };

        return service;
    };
})();