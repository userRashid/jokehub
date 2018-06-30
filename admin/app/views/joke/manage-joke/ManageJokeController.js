(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('ManageJokeController', _ManageJokeController);

    _ManageJokeController.$inject = ['JokeService', '$sce'];

    function _ManageJokeController(JokeService, $sce) {

        /////////////////////////////////////////////////////////////
        // Locals
        /////////////////////////////////////////////////////////////

        function getContentStatus(data, status) {
            var temp = [];
            data.forEach(function (e) {
                if (e.status === status) {
                    temp.push(e);
                }
            });
            return temp;
        }

        /////////////////////////////////////////////////////////////

        var vm = this;

        onInit();

        function onInit() {
            JokeService.getAllJoke().then(function (response) {
                vm.approvedContent = getContentStatus(response.data, 'approve');
                vm.approvedCount = vm.approvedContent.length;
                vm.pendingContent = getContentStatus(response.data, 'pending');
                vm.pendingCount = vm.pendingContent.length;
                vm.rejectedContent = getContentStatus(response.data, 'reject');
                vm.rejectedCount = vm.rejectedContent.length;
            });
        }

        this.edit = function (data) {
            this.editData = data;
            vm.updateJokeModel.setModel(data);
        }

        this.update = function () {
            vm.updateJokeModel.getModel().then(function (model) {
                var nid = vm.editData.nid;
                JokeService.updateJoke(nid, model);
            });
        }

        this.modifyStatus = function (row) {
            JokeService.modifyStatus(row);
        }

        this.view = function (row) {
            this.viewData = row;
        }

        this.changeStatus = function (nid, isForApprove) {
            JokeService.changeStatus(nid, isForApprove);
        }

        this.displayDescription = function (html) {
            return $sce.trustAsHtml(html);
        }
    }
})();