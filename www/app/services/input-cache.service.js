(function() {
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
            }
        };
        
        return service;
    };
})();