(function () {
    'use strict';

    angular
        .module('app')
        .filter('unitsToHTML', unitsToHTML);

    function unitsToHTML() {
        return unitsToHTMLFilter;

        ////////////////

        function unitsToHTMLFilter(input) {
            input = input || '';
            return input.replace(/\^(-?\d)/g, "<sup>$1</sup>").replace(/(deg)?(temp)?/g, '').replace(/C/g, 'ºC');
        }
    }
})();