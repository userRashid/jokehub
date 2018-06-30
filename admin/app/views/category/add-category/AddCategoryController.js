(function () {
    'use strict';

    angular
        .module('jokehubApp.category')
        .controller('AddCategoryController', _AddCategoryController);

    _AddCategoryController.$inject = ['CategoryService'];

    function _AddCategoryController(CategoryService) {
        var vm = this;

        vm.createCategory = function () {
            vm.createCategoryModel.getModel().then(function (categoryModel) {
                CategoryService.createCategory(categoryModel);
            });
        }
    }
})();