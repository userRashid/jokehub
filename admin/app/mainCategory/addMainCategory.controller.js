(function(){

  'use strict';
  angular
    .module('app.mainCategory')
    .controller('AddMainCategoryController',AddMainCategoryController);

      function AddMainCategoryController(API, $state, $stateParams){
        var vm = this;
        vm.isCreate = false;
        vm.mainCategory = {};
        if($stateParams.categoryId != undefined){
          vm.isCreate = true;
          API._get('main-category/'+$stateParams.categoryId).then(function(response){
            vm.mainCategory.name        = response.data[0].title;
            vm.mainCategory.description = response.data[0].description;
          });
        };
        vm.Update = function(mainCategory){
          API._post('main-category/'+$stateParams.categoryId,mainCategory).then(function(){
            $state.go('app.manage-main-category');
          });
        }
        vm.Create = function(mainCategory){
          API._post('main-category',mainCategory).then(function(){
            $state.go('app.manage-main-category');
          });
        }

      }
})();
//main-category/:id
