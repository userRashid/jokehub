(function () {
    'use strict';

    angular
        .module('jokehubApp.category')
        .controller('AddCategoryController', _AddCategoryController);

    _AddCategoryController.$inject = ['CategoryService'];

    function _AddCategoryController(CategoryService) {
        var vm = this;

        vm.createCategory = function () {
            var categoryModel = vm.createCategoryModel.getModel();
            CategoryService.createCategory(categoryModel);
        }
    }
})();