(function () {
    angular.module('jokehubApp.privilege')
        .factory('PrivilegeServices', _PrivilegeServices);

    _PrivilegeServices.$inject = ['Session'];

    function _PrivilegeServices(_session) {

        return {
            isUserHavePrivilege: _isUserHavePrivilege
        }

        function _isUserHavePrivilege(userPrivilege) {
            if (_session.get('privilege') === 'YXM5OGQ3ZjhhczdkZmFhOHM3ZA==') {
                return 'ADMIN';
            }
            return 'USER';
        }
    }
})();