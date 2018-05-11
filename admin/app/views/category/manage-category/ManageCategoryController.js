(function () {
    'use strict';

    angular
        .module('jokehubApp.category')
        .controller('ManageCategoryController', _ManageCategoryController);

    _ManageCategoryController.$inject = ['CategoryService'];

    function _ManageCategoryController(CategoryService) {
        var vm = this;

        onInit();

        function onInit() {
            CategoryService.getAllCategory().then(function (response) {
                vm.categoreis = response.data;
            });
        }

        this.modifyStatus = function (row) {
            CategoryService.modifyStatus(row);
        }
    }
})();