(function () {
    'use strict';

    angular
        .module('jokehubApp.login')
        .factory('LoginService', _LoginService);

    _LoginService.$inject = ['Session', 'Http', '$state'];

    function _LoginService(_session, _http, _state) {
        return {
            doLogin: _doLogin,
            isLogin: _isLogin,
            logout: _logout
        }

        function _doLogin(_loginData) {
            //var headers = { Authorization: (btoa(_loginData.userName + ':' + _loginData.password)) };
            return _http._post('authenticate', '', null).then(function (response) {
                console.log('Login ----- ', response);
                var token = response.data.token_type + ' ' + response.data.access_token;
                _session.set('token', token);
                _state.go('jokehub.dashboard');
            });
        }

        function _isLogin() {
            return _session.get('token') !== '' && _session.get('token') !== null;
        }

        function _logout() {
            _session.clear();
            _state.go('jokehub.login');
        }
    }
})();