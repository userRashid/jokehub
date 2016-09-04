(function(){

  'use strict';
  angular
    .module('app.mainCategory')
    .controller('AddMainCategoryController',AddMainCategoryController);

      function AddMainCategoryController(API, $state, $stateParams){
        var vm = this;
        vm.isCreate = false;
        if($stateParams.categoryId != undefined){
          vm.isCreate = true;
          API._get('main-category/'+$stateParams.categoryId).then(function(response){
            console.log('response --- ',response);
          });
        };
        vm.Update = function(mainCategory,id){
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
