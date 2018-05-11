(function () {
    'use strict';
    angular.module('jokehubApp.privilege')
        .directive('jhPrivilege', _jhPrivilege);

    _jhPrivilege.$inject = ['$compile', 'PrivilegeServices'];

    function _jhPrivilege($compile, PrivilegeServices) {
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