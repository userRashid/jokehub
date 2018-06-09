(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlUpload', _dlUpload);
    _dlUpload.$inject = ['$compile', '$timeout'];

    function _dlUpload($compile, $timeout) {
        return {
            restrict: 'A'
            , controller: controller
            , scope: {
                data: '=dlUpload'
            }
            , link: link
        }
        function link($scope, element, attr) {
            element.html('').append($compile(renderHTML())($scope));
        }
        function controller($scope) {
            $scope.isPopupShow = true;
            $scope.myImage = '';
            $scope.myCroppedImage = '';
            var handleFileSelect = function (evt) {
                var file = evt.currentTarget.files[0];
                var reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function ($scope) {
                        $scope.myImage = evt.target.result;
                        $scope.data.model = file;
                    });
                };
                reader.readAsDataURL(file);
            };
            $timeout(function () {
                var id = '#' + $scope.data.name;
                angular.element(document.querySelector(id)).on('change', handleFileSelect);
            });

            $scope.add = function () {
                $scope.isPopupShow = false;
                $scope.myImage = '';
                $scope.myCroppedImage = '';
            }
        }
        function renderHTML() {
            var html = '';
            html += '<button type = "button" class="btn btn-primary" data-toggle="modal" data-target="#imageUpload"> Add Image</button >' +
                '<div ng-if="isPopupShow" class="modal fade bd-example-modal-lg" id="imageUpload" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-lg"><div class="modal-content">' +
                '<div><input type="file" id="{{data.name}}" /></div>' +
                '<div class="cropArea">' +
                '<img-crop image="myImage" result-image="myCroppedImage"></img-crop>' +
                '</div>' +
                '<div>Cropped Image:</div>' +
                '<div><img ng-src="{{myCroppedImage}}" /></div>' +
                '<button class="btn btn-success" ng-click="add()" data-dismiss="modal">Add</button>' +
                '</div></div></div>';
            return html;
        }
    }
})();




