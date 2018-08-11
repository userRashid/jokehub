(function () {
    angular.module('jokehubApp.user')
        .factory('UserService', _UserService);

    _UserService.$inject = ['Http'];

    function _UserService(_http) {
        return {
            getAllUser: _getUserUser,
            getUserDetails: _getUserDetails
        }

        function _getUserUser() {
            return _http._get('user/all');
        }

        function _getUserDetails(id) {
            return _http._get('userdetails/' + id);
        }
    }
})();