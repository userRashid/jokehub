(function(){

  'use strict';
  angular
    .module('app.mainCategory')
    .controller('ManageMainCategoryController',ManageMainCategoryController);

      function ManageMainCategoryController(API, Node){
        var vm = this;
        API._get('main-category').then(function(response){
          vm.mainCategories = Node.createNode(response.data);
        });
      }
})();
