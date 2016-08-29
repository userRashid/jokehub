(function () {

  'use strict';

  angular
    .module('app.component')
    .directive('fileModel', fileModel);

  function fileModel($parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function () {
          scope.$apply(function () {
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }

  angular
    .module('app.component')
    .directive('jhUpload', jhUpload);

  function jhUpload($compile) {

    return {
      restrict: 'A'
      , scope: {
        options: '=jhUpload'
      }
      , link: link
      //,controller : controller
    }
    function link($scope, element, attr) {
      console.log($scope, element, attr);
      element.html('').append($compile(renderHTML())($scope));
    };
    function renderHTML() {
      var html = '';
      html = '<input type="file" file-model="options.model"/>';
      return html;
    }
  }



})();
