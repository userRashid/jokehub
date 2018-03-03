(function () {
    'use strict';

    angular
        .module('jokehubApp.category')
        .controller('AddMainCategoryController', _AddMainCategoryController);

    _AddMainCategoryController.$inject = ['CategoryService'];

    function _AddMainCategoryController(CategoryService) {
        var vm = this;

        vm.createMainCategory = function () {
            var mainCategoryModel = vm.createMainCategoryModel.getModel();
            CategoryService.createMainCategory(mainCategoryModel);
        }
    }
})();