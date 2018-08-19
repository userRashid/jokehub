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
            vm.showErrorMsg = true;
            SignupService.doSignup(_data).then(function (r) {
                vm.isLoading = false;
                if (r.data.status == 1) {
                    vm.showSuccessMsg = true;
                }
                if (r.data.status == 2) {
                    vm.showErrorMsg = true;
                }
                vm.name = r.data.name;
                vm.email = r.data.email;
            }, function (error) {
                console.log('Error', error);
                vm.isLoading = false;
            });
        }
    }
})();