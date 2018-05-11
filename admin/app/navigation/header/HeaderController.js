(function () {
    'use strict';

    angular
        .module('jokehubApp.navigation')
        .controller('HeaderController', _HeaderController);

    _HeaderController.$inject = ['LoginService', 'Session'];

    function _HeaderController(LoginService, Session) {
        var vm = this;
        vm.userName = Session.get('user_name');
        vm.logout = function () {
            LoginService.logout();
        }
    }

})();