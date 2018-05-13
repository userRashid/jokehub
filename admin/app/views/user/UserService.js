(function () {
    angular.module('jokehubApp.user')
        .factory('UserService', _UserService);

    _UserService.$inject = ['Http'];

    function _UserService(_http) {
        return {
            getAllUser: _getUserUser
        }

        function _getUserUser() {
            return _http._get('user/all');
        }
    }
})();