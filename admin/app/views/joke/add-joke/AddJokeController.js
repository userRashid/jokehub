(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('AddJokeController', _AddJokeController);

    _AddJokeController.$inject = ['JokeService', 'CategoryService'];

    function _AddJokeController(JokeService, CategoryService) {
        var vm = this;

        onInit();

        vm.createJoke = function () {
            var createJokeModel = vm.createJokeModel.getModel();
            JokeService.createJoke(createJokeModel);
        };

        function onInit() {
            CategoryService.getAllCategory().then(function (response) {
                vm.allCategories = response.data;
            });
        }
    }
})();