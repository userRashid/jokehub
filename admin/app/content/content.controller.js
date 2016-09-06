(function() {

    'use strict';

    angular
        .module('app.content')
        .controller('ContentController', ContentController);

    /** @ngInject */
    function ContentController(API,ContentService) {

        var vm = this;
        ContentService.getCategories().then(function(categories){
          vm.categories = categories;
        });
        vm.Create = function(_data,_image){
          API._post('content',_data).then(function(){
          });
        }
        API._get('main-category').then(function(response){
          vm.mainCategory = response.data;
        });
    }

})();
