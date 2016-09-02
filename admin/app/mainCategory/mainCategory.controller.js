(function(){

  'use strict';
  angular
    .module('app.mainCategory')
    .controller('MainCategoryController',MainCategoryController);

      function MainCategoryController(API){
        var vm = this;
        vm.Create = function(mainCategory){
          API._post('main-category',mainCategory).then(function(){

          });
        }

      }
})();
