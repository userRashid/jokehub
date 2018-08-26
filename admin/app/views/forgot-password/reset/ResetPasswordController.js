(function () {
    'use strict';

    angular
        .module('jokehub.forgotPassword')
        .controller('ResetPasswordController', _ResetPasswordController);

    _ResetPasswordController.$inject = ['ForgotPasswordService', '$stateParams'];

    function _ResetPasswordController(ForgotPasswordService, $stateParams) {
        var vm = this;
        vm.isLoading = false;
        let confirmId = $stateParams.id;
        vm.reset = function (data) {
            vm.isLoading = true;
            vm.showSuccessMsg = false;
            vm.showErrorMsg = false;
            data.confirmId = confirmId;
            ForgotPasswordService.resetPassword(data).then(function (r) {
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