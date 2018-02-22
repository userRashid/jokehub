(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('ManageJokeController', _ManageJokeController);

    _ManageJokeController.$inject = ['JokeService'];

    function _ManageJokeController(JokeService) {
        var vm = this;

        onInit();

        function onInit() {
            JokeService.getAllJoke().then(function (response) {
                vm.jokes = response.data;
            });
        }

        this.modifyStatus = function (row) {
            JokeService.modifyStatus(row);
        }
    }
})();