(function () {
    'use strict';

    angular
        .module('jokehubApp.product')
        .controller('AddProductController', _AddProductController);

    _AddProductController.$inject = ['ProductService', 'CategoryService'];

    function _AddProductController(ProductService, CategoryService) {
        var vm = this;

        onInit();

        var categoryId = null;
        vm.showCreateProduct = false;

        vm.selectCategory = function (category) {
            vm.showCreateProduct = true;
            vm.categoryName = category.CategoryName;
            categoryId = category.CategoryId;
        };

        vm.createProduct = function () {
            var createProductModel = vm.createProductModel.getModel();
            createProductModel.CategoryId = categoryId;
            ProductService.createProduct(createProductModel);
        };

        function onInit() {
            CategoryService.getAllCategory().then(function (response) {
                vm.category = response.data;
            });
        }
    }
})();