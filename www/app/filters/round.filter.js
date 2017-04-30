(function() {
'use strict';

    angular
        .module('app')
        .filter('round', round);

    function round() {
        return roundFilter;

        ////////////////

        function roundFilter(input, n) {
            input = input || 0;
            return input.toFixed(n);
        }
    }
})();