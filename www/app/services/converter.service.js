(function() {
'use strict';

    angular
        .module('app')
        .factory('converter', converter);

    // converter.inject = ['dependency1'];
    function converter() {
        var service = {
            convert: convert
        };
        
        return service;

        ////////////////
        function convert(value, inUnit, outUnit) {
            var qty = Qty(value, inUnit);
            return qty.to(outUnit).scalar;
        };
    }
})();