(function () {
    'use strict';

    angular
        .module('jokehubApp.product')
        .controller('ManageProductController', _ManageProductController);

    _ManageProductController.$inject = ['ProductService'];

    function _ManageProductController(ProductService) {
        var vm = this;

        onInit();

        function onInit() {
            ProductService.getAllProduct().then(function (response) {
                vm.products = response.data;
            });
        }
    }
})();