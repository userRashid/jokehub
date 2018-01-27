(function () {
    'use strict';

    angular
        .module('jokehubApp.navigation')
        .controller('HeaderController', _HeaderController);

    _HeaderController.$inject = ['LoginService'];

    function _HeaderController(LoginService) {
        var vm = this;
        vm.logout = function () {
            LoginService.logout();
        }
    }

})();