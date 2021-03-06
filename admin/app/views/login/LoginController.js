(function () {
    'use strict';

    angular
        .module('jokehubApp.login')
        .controller('LoginController', _LoginController);

    _LoginController.$inject = ['LoginService'];

    function _LoginController(LoginService) {
        var vm = this;
        vm.name = 'rashid';
        vm.isLoading = false;
        vm.showError = false;
        vm.doLogin = function (_data) {
            vm.isLoading = true;
            LoginService.doLogin(_data).then(function () {
                vm.isLoading = false;
            }, function (error) {
                vm.showError = true;
                vm.isLoading = false;
                vm.error = error.data;
            });
        }
    }
})();