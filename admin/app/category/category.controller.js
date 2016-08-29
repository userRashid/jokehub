(function() {

    'use strict';

    angular
        .module('app.category')
        .controller('CategoryController', CategoryController);

    /** @ngInject */
    function CategoryController(API) {

        var vm = this;
        vm.Create = function(_data){
          API._post('category',_data);
        }

    }

})();
