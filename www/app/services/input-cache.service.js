(function () {
    'use strict';

    angular
        .module('app')
        .factory('inputCache', inputCache);

    // inputCache.inject = ['dependency1'];
    function inputCache() {
        var service = {
            input: {
                type: 1,
                prop1: undefined,
                prop2: undefined,
                substance: 1
            },
            setData: setData
        };

        return service;

        function setData(object) {
            service.input.type = object.type || service.input.type,
            service.input.prop1 = object.prop1 || service.input.prop1,
            service.input.prop2 = object.prop2 || service.input.prop2,
            service.input.substance = object.substance || service.input.substance
            return;
        };
    };
})();