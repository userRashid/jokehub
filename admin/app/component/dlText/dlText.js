(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlTextarea', _dlTextarea);

    _dlTextarea.$inject = ['$compile'];

    function _dlTextarea($compile) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlTextarea'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) { }
        function renderHTML() {
            var html = '';
            html += '<textarea rows="4"  ng-model="data.model" class="form-control" placeholder="{{data.placeholder}}"></textarea>'
            return html;
        }
    }
})();