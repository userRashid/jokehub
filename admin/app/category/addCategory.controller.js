(function() {

    'use strict';

    angular
        .module('app.category')
        .controller('CategoryController', CategoryController);

    /** @ngInject */
    function CategoryController($state, CategoryService, API) {

        var vm = this;
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
