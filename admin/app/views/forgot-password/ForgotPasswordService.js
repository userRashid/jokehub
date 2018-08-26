(function () {
    'use strict';

    angular
        .module('jokehub.forgotPassword')
        .factory('ForgotPasswordService', _ForgotPasswordService);

    _ForgotPasswordService.$inject = ['Http', '$state'];

    function _ForgotPasswordService(_http, _state) {
        return {
            forgotPassword: _forgotPassword,
            resetPassword: _resetPassword
        }

        function _forgotPassword(_data) {
            return _http._post('forgotpassword', _data);
        }

        function _resetPassword(_data) {
            console.log('data ====>', _data);
            return _http._put('resetpassword', _data);
        }
    }
})();