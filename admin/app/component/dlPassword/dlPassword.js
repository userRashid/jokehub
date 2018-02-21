(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlPassword', _dlPassword);

    _dlPassword.$inject = ['$compile'];

    function _dlPassword($compile) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlPassword'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) { }
        function renderHTML() {
            var html = '';
            html += '<input type="password" ng-model="data.model" class="form-control">'
            return html;
        }
    }
})();