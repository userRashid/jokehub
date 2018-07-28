(function () {
    'use strict';
    angular.module('jokehubApp.privilege')
        .directive('jhPrivilege', _jhPrivilege);

    _jhPrivilege.$inject = ['PrivilegeServices'];

    function _jhPrivilege(PrivilegeServices) {
        return {
            restrict: 'A'
            , scope: {
                data: '@jhPrivilege'
            }
            , link: link
        }
        function link($scope, element, attr) {
            if ($scope.data !== PrivilegeServices.isUserHavePrivilege()) {
                element.remove();
            }
        }
    }
})();