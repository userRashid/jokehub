(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlSelect', _dlSelect);

    _dlSelect.$inject = ['$compile'];

    function _dlSelect($compile) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlSelect'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) {
            $scope.Data = [];
            $scope.data.nullValue = $scope.data.nullValue || '-- Make Selection --';
            if (angular.isArray($scope.data.values)) {
                $scope.Data = $scope.data.values;
            } else {
                $scope.$watch('data.values', function (value) {
                    value.then(function (possibleValues) {
                        $scope.Data = possibleValues;
                    });
                });
            }
        }
        function renderHTML() {
            var html = '';
            html += '<select class="form-control" ng-model="data.model" ng-options="item.key as item.value for item in Data" >' +
                '<option value="">{{data.nullValue}}</option>' +
                '</select>'
            return html;
        }
    }
})();