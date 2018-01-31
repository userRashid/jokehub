(function () {
    'use strict';

    angular
        .module('jokehubApp.signup')
        .factory('SignupService', _SignupService);

    _SignupService.$inject = ['Session', 'Http', '$state'];

    function _SignupService(_session, _http, _state) {
        return {
            doSignup: _doSignup
        }

        function _doSignup(_signupData) {
            return _http._post('signup', _signupData).then(function (response) {
                _state.go('jokehub.login');
            });
        }
    }
})();