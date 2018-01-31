(function () {
    'use strict';

    angular
        .module('jokehubApp.signup')
        .controller('SignupController', _SignupController);

    _SignupController.$inject = ['SignupService'];

    function _SignupController(SignupService) {
        var vm = this;
        vm.isLoading = false;
        vm.doSignup = function (_data) {
            vm.isLoading = true;
            SignupService.doSignup(_data).then(function () {
                vm.isLoading = false;
            }, function (error) {
                console.log('Error', error);
                vm.isLoading = false;
            });
        }
    }
})();