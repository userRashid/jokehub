(function() {

    'use strict';

    angular
        .module('app.category')
        .controller('CategoryController', CategoryController);

    /** @ngInject */
    function CategoryController(API,$state, CategoryService) {

        var vm = this;
        vm.Create = function(_data,_image){
          API._post('category',_data).then(function(){
            //$state.go('')
          });
        }
        CategoryService.getMainCategories().then(function(response){
          vm.mainCategory = response;
        });
        API._get('category').then(function(response){
          vm.category = response.data;
        });

    }

})();
