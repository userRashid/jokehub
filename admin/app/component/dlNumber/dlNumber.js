(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlNumber', _dlNumber);

    _dlNumber.$inject = ['$compile'];

    function _dlNumber($compile) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlNumber'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) { }
        function renderHTML() {
            var html = '';
            html += '<input type="number" ng-model="data.model" class="form-control">'
            return html;
        }
    }
})();