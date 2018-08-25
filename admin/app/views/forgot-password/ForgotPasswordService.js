(function () {
    'use strict';

    angular
        .module('jokehub.forgotPassword')
        .factory('ForgotPasswordService', _ForgotPasswordService);

    _ForgotPasswordService.$inject = ['Http', '$state'];

    function _ForgotPasswordService(_http, _state) {
        return {
            forgotPassword: _forgotPassword
        }

        function _forgotPassword(_data) {
            return _http._post('forgotpassword', _data).then(function (response) {
                _state.go('jokehub.login');
            });
        }
    }
})();