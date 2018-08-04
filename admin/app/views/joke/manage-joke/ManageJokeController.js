(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('ManageJokeController', _ManageJokeController);

    _ManageJokeController.$inject = ['JokeService', '$sce', 'CategoryService', 'RejectReason', 'AdministratorService'];

    function _ManageJokeController(JokeService, $sce, CategoryService, RejectReason, AdministratorService) {

        /////////////////////////////////////////////////////////////
        // Locals
        /////////////////////////////////////////////////////////////

        function getContentStatus(data, status, categoreis) {
            var temp = [];
            data.forEach(function (e) {
                if (e.status === status) {
                    var category = _.filter(categoreis, function (item) {
                        return item.id === e.cid
                    })[0];
                    if (category != undefined) {
                        e.category = category.name;
                    }
                    temp.push(e);
                }
            });
            return temp;
        }

        /////////////////////////////////////////////////////////////

        var vm = this;

        onInit();

        function onInit() {
            CategoryService.getAllCategory().then(function (res) {
                var categoreis = res.data;
                JokeService.getAllJoke().then(function (response) {
                    vm.approvedContent = getContentStatus(response.data, 'approve', categoreis);
                    vm.approvedCount = vm.approvedContent.length;
                    vm.pendingContent = getContentStatus(response.data, 'pending', categoreis);
                    vm.pendingCount = vm.pendingContent.length;
                    vm.rejectedContent = getContentStatus(response.data, 'reject', categoreis);
                    vm.rejectedCount = vm.rejectedContent.length;
                });
            });
            AdministratorService.getAllReasons().then(function (response) {
                vm.rejectReason = response.data;
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
            if (isForApprove) {
                JokeService.changeStatus(nid, isForApprove, null);
            } else {
                RejectReason.getReason({
                    'id': nid,
                    'data': vm.rejectReason
                });
            }
        }

        this.stripHtml = function (html) {
            var tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }

        this.displayDescription = function (html) {
            return $sce.trustAsHtml(html);
        }

        this.selectAll = function () {
            var selectStatus = !vm.isAllSelected;
            angular.forEach(vm.pendingContent, function (item) { item.selected = selectStatus; });

        }

        this.optionSelect = function () {
            vm.isAllSelected = !vm.pendingContent.every(function (item) { return item.selected; })
        }
    }
})();