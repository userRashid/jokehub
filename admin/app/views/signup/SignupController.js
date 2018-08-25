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
            vm.showSuccessMsg = false;
            vm.showErrorMsg = false;
            SignupService.doSignup(_data).then(function (r) {
                vm.isLoading = false;
                vm.showSuccessMsg = true;
                vm.name = r.data.name;
                vm.email = r.data.email;
            }, function (error) {
                vm.isLoading = false;
                vm.showErrorMsg = true;
                vm.errorMsg = error.data.errorMsg;
            });
        }
    }
})();