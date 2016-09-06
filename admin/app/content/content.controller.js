(function() {

    'use strict';

    angular
        .module('app.content')
        .controller('ContentController', ContentController);

    /** @ngInject */
    function ContentController(API,ContentService,$scope) {

        var vm = this;
        ContentService.getCategories()
        $scope.$watch(
            function watchFoo( scope ) {
              return( vm.selectedMainCategory );
            },function handleFooChange( newValue, oldValue ) {
              if(newValue == undefined) return;
              ContentService.getCategoryById(newValue).then(function(categories){
                vm.categories = categories;
              });
            }
        );
        vm.Create = function(_data,_image){
          _data.mainCategory = vm.selectedMainCategory;
          API._post('content',_data).then(function(){
          });
        }
        API._get('main-category').then(function(response){
          vm.mainCategory = response.data;
        });
    }

})();
