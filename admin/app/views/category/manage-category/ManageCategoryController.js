(function () {
    'use strict';

    angular
        .module('jokehubApp.category')
        .controller('ManageCategoryController', _ManageCategoryController);

    _ManageCategoryController.$inject = ['CategoryService', '$sce', 'JokeService'];

    function _ManageCategoryController(CategoryService, $sce, JokeService) {

        /////////////////////////////
        // Locals
        ////////////////////////////

        function getStatusCount(status, data) {
            var _data = _.filter(data, function (item) {
                return item.status == status;
            });
            return _data.length;
        }

        ////////////////////////////

        var vm = this;

        onInit();

        function onInit() {
            JokeService.getAllJoke().then(function (res) {
                var jokes = res.data;
                CategoryService.getAllCategory().then(function (response) {
                    response.data.forEach(function (e) {
                        var categoryJokes = _.filter(jokes, function (item) {
                            return item.cid === e.id
                        });
                        e.totalJokes = categoryJokes.length;
                        e.approved = getStatusCount('approve', categoryJokes);
                        e.pending = getStatusCount('pending', categoryJokes);
                        e.reject = getStatusCount('reject', categoryJokes);
                    });
                    vm.categoreis = response.data;
                });
            });
        }

        this.modifyStatus = function (row) {
            CategoryService.modifyStatus(row);
        }

        this.view = function (row) {
            this.viewData = row;
        }

        this.edit = function (row) {
            vm.editData = row;
            vm.updateCategoryModel.setModel(row);
        }

        this.displayDescription = function (html) {
            return $sce.trustAsHtml(html);
        }

        this.update = function () {
            vm.updateCategoryModel.getModel().then(function (updateModel) {
                CategoryService.updateCategory(updateModel, vm.editData.nid);
            });
        }
    }
})();