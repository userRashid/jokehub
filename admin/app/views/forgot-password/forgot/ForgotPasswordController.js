(function () {
    'use strict';

    angular
        .module('jokehub.forgotPassword')
        .controller('ForgotPasswordController', _ForgotPasswordController);

    _ForgotPasswordController.$inject = ['ForgotPasswordService'];

    function _ForgotPasswordController(ForgotPasswordService) {
        var vm = this;
        vm.isLoading = false;
        
        vm.submit = function (data) {
            vm.isLoading = true;
            vm.showSuccessMsg = false;
            vm.showErrorMsg = false;
            ForgotPasswordService.forgotPassword(data).then(function (r) {
                vm.isLoading = false;
                vm.showSuccessMsg = true;
                vm.email = r.data.email;
            }, function (error) {
                vm.isLoading = false;
                vm.showErrorMsg = true;
                vm.errorMsg = error.data.errorMsg;
                console.log('Error =>', error);
            });
        }
    }
})();