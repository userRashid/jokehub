(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlCheckbox', _dlCheckbox);

    _dlCheckbox.$inject = ['$compile'];

    function _dlCheckbox($compile) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlCheckbox'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) { }
        function renderHTML() {
            var html = '';
            html += '<label class="checkbox"><div class="checker">';
            html += '<span><input type="checkbox" ng-model="data.model" ng-checked ="data.model"  class="checkbox" value="{{data.value}}"></span>';
            html += ' {{data.label}}';
            html += '</label>';
            return html;
        }
    }
})();