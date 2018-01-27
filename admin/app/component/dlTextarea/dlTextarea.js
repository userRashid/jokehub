(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlText', _dlText);

    _dlText.$inject = ['$compile'];

    function _dlText($compile) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlText'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) { }
        function renderHTML() {
            var html = '';
            html += '<input type="text" ng-model="data.model" class="form-control">';
            return html;
        }
    }
})();