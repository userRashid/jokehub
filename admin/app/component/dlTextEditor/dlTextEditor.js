(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlTextEditor', _dlTextEditor);

    _dlTextEditor.$inject = ['$compile'];

    function _dlTextEditor($compile) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlTextEditor'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) { }
        function renderHTML() {
            var html = '';
            html += '<trix-editor angular-trix ng-model="data.model"></trix-editor>';
            return html;
        }
    }
})();