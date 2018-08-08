(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('AddJokeController', _AddJokeController);

    _AddJokeController.$inject = ['JokeService', 'CategoryService', '$timeout'];

    function _AddJokeController(JokeService, CategoryService, $timeout) {
        var vm = this;

        onInit();

        vm.createJoke = function () {
            vm.createJokeModel.getModel().then(function (createJokeModel) {
                JokeService.createJoke(createJokeModel);
            });
        };

        function onInit() {
            CategoryService.getAllCategory().then(function (response) {
                vm.allCategories = response.data;
            });
        }
        $timeout(function () {
            $("button[data-trix-action='link']").remove();
        });
    }
})();