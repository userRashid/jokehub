(function () {
    'use strict';

    angular
        .module('jokehubApp.category')
        .controller('ManageCategoryController', _ManageCategoryController);

    _ManageCategoryController.$inject = ['CategoryService', 'JokeService'];

    function _ManageCategoryController(CategoryService, JokeService) {

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
    }
})();