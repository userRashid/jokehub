(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlForm', _dlForm);

    _dlForm.$inject = ['FormData', '$compile', 'Form'];

    function _dlForm(FormData, $compile, Form) {
        return {
            restrict: 'A'
            , controller: controller
            , controllerAs: 'vm'
            , scope: {
                formName: '@dlForm'
                , mode: '@'
                , formModel: '='
            }
            , link: link
        }

        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }

        function controller($scope) {
            $scope.formItems = FormData.getForm($scope.formName);
            if ($scope.mode == undefined) {
                $scope.mode = 'full';
            }
            $scope.getClass = function (item) {
                if (item.mode != undefined) return 'col-lg-12';
                var c = '';
                if ($scope.mode == 'full') c = 'col-lg-12';
                if ($scope.mode == 'inline') c = 'col-lg-4';
                if ($scope.mode == 'half') c = 'col-lg-6';
                return c;
            }
            $scope.formModel = Form.getFormFunction($scope.formItems);
        }

        function renderHTML() {
            var html = '';
            html += '<form class="w-100" name="dl-{{formName}}-form" class="clearfix">';
            html += '<div ng-class="getClass(item)" ng-repeat="item in formItems" ng-class="{\'selected\':$odd}" class="form-group" ng-switch on="item.type">';
            html += '<label ng-if="item.label && item.type !== \'dlCheckbox\'">{{item.label}}</label>';
            html += '<div      ng-switch-when="dlText"      data-dl-text="item" ></div>';
            html += '<div      ng-switch-when="dlTextarea"  data-dl-textarea="item"></div>';
            html += '<div      ng-switch-when="dlCheckbox"  data-dl-checkbox="item"></div>';
            html += '<div      ng-switch-default style="border: 1px solid #c9302c;">{{item.type}}</div>';
            html += '<div class="separator"></div>';
            html += '</div>';
            html += '</form>';
            return html;
        }
    }
})();