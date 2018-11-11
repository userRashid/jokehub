(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlHideModel', _dlHideModel);

    _dlHideModel.$inject = [''];

    function _dlHideModel() {
        return {
            restrict: 'A'
            , scope: {
                data: '=dlHideModel'
            }
            , link: link
        }
        function link($scope, element, attr) {
            // element.html('').append($compile(renderHTML())($scope));
        }
    }
})();