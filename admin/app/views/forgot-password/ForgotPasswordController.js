(function () {
    'use strict';

    angular
        .module('jokehub.forgotPassword')
        .controller('ForgotPasswordController', _ForgotPasswordController);

    _ForgotPasswordController.$inject = ['ForgotPasswordService'];

    function _ForgotPasswordController(ForgotPasswordService) {
        var vm = this;

        vm.submit = function (data) {
            ForgotPasswordService.forgotPassword(data);
        }
    }
})();