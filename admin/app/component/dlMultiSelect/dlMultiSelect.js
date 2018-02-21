(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlMultiSelect', _dlMultiSelect);

    _dlMultiSelect.$inject = ['$compile', '$q'];

    function _dlMultiSelect($compile, $q) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlMultiSelect'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) {
            $scope.maxTags = 100;

            if ($scope.data.maxTags) {
                $scope.maxTags = $scope.data.maxTags
            }

            $scope.getDropDown = function (query) {
                var _d = $q.defer();

                if ($scope.data.dropDown) {
                    $scope.data.dropDown.then(function (allItems) {
                        var filteredItems = _.chain(allItems)
                            .filter(function (x) { return x.toLowerCase().indexOf(query.toLowerCase()) > -1; })
                            .take(10)
                            .value();
                        _d.resolve(filteredItems);
                    });

                } else {
                    _d.resolve([]);
                }
                return _d.promise;
            };
        }
        function renderHTML() {
            var html = '';
            html += '<tags-input max-tags="{{maxTags}}" class="tags-input-override-not" ng-model="data.model" allow-leftover-text="false" placeholder="{{data.label}}" add-on-blur="true" add-on-enter="true" replace-spaces-with-dashes="false">';
            html += '<auto-complete source="getDropDown($query)"min-length="0" debounce-delay="0" load-on-focus="true"></auto-complete>';
            html += '</tags-input>';
            return html;
        }
    }
})();