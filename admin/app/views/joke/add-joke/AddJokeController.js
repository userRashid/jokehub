(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('AddJokeController', _AddJokeController);

    _AddJokeController.$inject = ['JokeService', 'CategoryService'];

    function _AddJokeController(JokeService, CategoryService) {
        var vm = this;

        onInit();

        var jokeId = null;
        vm.showCreateJoke = false;

        vm.selectJoke = function (joke) {
            vm.showCreateJoke = true;
            vm.jokeName = joke.JokeName;
            jokeId = joke.JokeId;
        };

        vm.createJoke = function () {
            var createJokeModel = vm.createJokeModel.getModel();
            createJokeModel.JokeId = jokeId;
            JokeService.createJoke(createJokeModel);
        };

        function onInit() {
            CategoryService.getAllCategory().then(function (response) {
                vm.joke = response.data;
            });
        }
    }
})();