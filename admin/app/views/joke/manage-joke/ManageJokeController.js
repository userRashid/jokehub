(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('ManageJokeController', _ManageJokeController);

    _ManageJokeController.$inject = ['JokeService'];

    function _ManageJokeController(JokeService) {
        var vm = this;

        var _data = [{
            Content: 'description',
            Category: 'name',
            isActive: true
        }]

        onInit();

        function onInit() {
            vm.jokes = _data;
            /* JokeService.getAllJoke().then(function (response) {
                vm.jokes = response.data;
            }); */
        }

        this.edit = function (data) {
            vm.updateJokeModel.setModel(data);
        }

        this.update = function () {
            var model = vm.updateJokeModel.getModel();
            console.log('Model for Update', model);
        }

        this.modifyStatus = function (row) {
            JokeService.modifyStatus(row);
        }
    }
})();