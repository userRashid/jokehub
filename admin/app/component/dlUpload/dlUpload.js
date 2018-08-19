(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('dlUpload', _dlUpload);
    _dlUpload.$inject = ['$compile', '$timeout'];

    function _dlUpload($compile, $timeout) {
        return {
            restrict: 'A'
            , controller: controller
            , templateUrl: 'app/component/dlUpload/dlUpload.html'
            , scope: {
                data: '=dlUpload'
            }
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
    }
})();