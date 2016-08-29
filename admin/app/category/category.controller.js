(function() {

    'use strict';

    angular
        .module('app.category')
        .controller('CategoryController', CategoryController);

    /** @ngInject */
    function CategoryController(API,$state) {

        var vm = this;
        vm.Create = function(_data,_image){
          console.log(' ***** ',_image.model);
          API._post('category',_data).then(function(){
            $state.go('')
          });
        }

    }

})();
