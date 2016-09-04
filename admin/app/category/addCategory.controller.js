(function() {

    'use strict';

    angular
        .module('app.category')
        .controller('CategoryController', CategoryController);

    /** @ngInject */
    function CategoryController($state, CategoryService, API, $stateParams) {

        var vm = this;
        vm.isCreate = true;
        vm.category = {};
        if($stateParams.categoryId != undefined){
          vm.isCreate = false;
          API._get('category/'+$stateParams.categoryId).then(function(response){
            vm.category.name        = response.data[0].title;
            vm.category.description = response.data[0].description;
            vm.category.mainCategory = response.data[0].n_id;
          });
        };
        vm.Update = function(mainCategory){
          API._post('category/'+$stateParams.categoryId,mainCategory).then(function(){
            $state.go('app.manage-category');
          });
        }
        vm.Create = function(_data,_image){
          API._post('category',_data).then(function(){
            $state.go('app.manage-category');
          });
        }
        CategoryService.getMainCategories().then(function(response){
          vm.mainCategory = response;
        });

    }

})();
