(function () {
  'use strict';

  angular
    .module('app')
    .controller('ConfigController', ConfigController);

  // ConfigController.inject = ['dependency1'];
  function ConfigController() {
    var vm = this;

    activate();

    ////////////////

    function activate() {
    };
  };
})();
