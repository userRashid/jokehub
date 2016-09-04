(function() {

    'use strict';

    angular
        .module('app.category')
        .controller('ManageController', ManageController);

    /** @ngInject */
    function ManageController(API, Node) {

        var vm = this;

        API._get('category').then(function(response){
          vm.category = Node.createNode(response.data);
        });

    }

})();
