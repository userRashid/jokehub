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

            function b64toBlob(b64Data, contentType, sliceSize) {
                contentType = contentType || '';
                sliceSize = sliceSize || 512;

                var byteCharacters = atob(b64Data);
                var byteArrays = [];

                for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                    var slice = byteCharacters.slice(offset, offset + sliceSize);

                    var byteNumbers = new Array(slice.length);
                    for (var i = 0; i < slice.length; i++) {
                        byteNumbers[i] = slice.charCodeAt(i);
                    }

                    var byteArray = new Uint8Array(byteNumbers);

                    byteArrays.push(byteArray);
                }

                var blob = new Blob(byteArrays, { type: contentType });
                return blob;
            }


            var handleFileSelect = function (evt) {
                var file = evt.currentTarget.files[0];
                var reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function ($scope) {
                        $scope.myImage = evt.target.result;
                        /* var ImageURL = evt.target.result;
                        var block = ImageURL.split(";");
                        var contentType = block[0].split(":")[1];
                        var realData = block[1].split(",")[1];
                        var blob = b64toBlob(realData, file.type); */
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
                if ($scope.data.imageCropped) $scope.data.imageCropped();
            }
        }
        function renderHTML() {
            var html = '';
            html += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#imageUpload"> {{data.label}}</button>' +
                '<div ng-if="isPopupShow" class="modal fade bd-example-modal-lg" id="imageUpload" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-lg"><div class="modal-content">' +
                '<div class="text-left"><input type="file" id="{{data.name}}" /></div>' +
                '<div class="clearfix">' +
                '<div class="cropArea">' +
                '<img-crop image="myImage" result-image="myCroppedImage"></img-crop>' +
                '</div>' +
                '<div class="cropped"><label>Your Selection</label><br/><img ng-src="{{myCroppedImage}}" /></div>' +
                '</div>' +
                '<div class="text-center"><button class="btn btn-success" ng-click="add()" data-dismiss="modal">Add</button></div>' +
                '</div></div></div>';
            return html;
        }
    }
})();




