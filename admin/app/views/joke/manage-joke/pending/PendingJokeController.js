(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('PendingJokeController', _PendingJokeController);

    _PendingJokeController.$inject = ['JokeService', '$sce', 'CategoryService', 'RejectReason', 'AdministratorService', 'NgTableParams'];

    function _PendingJokeController(JokeService, $sce, CategoryService, RejectReason, AdministratorService, NgTableParams) {

        /////////////////////////////////////////////////////////////
        // Locals
        /////////////////////////////////////////////////////////////

        function getCategory(data, categoreis) {
            var temp = [];
            data.forEach(function (e) {
                var category = _.filter(categoreis, function (item) {
                    return item.id === e.cid
                })[0];
                if (category != undefined) {
                    e.category = category.name;
                }
                temp.push(e);
            });
            return temp;
        }

        function getIds(_data) {
            let _ids = [];
            _.filter(_data, function (item) {
                return item.selected;
            }).forEach(function (item) {
                _ids.push(item.nid);
            });
            return _ids;
        }

        /////////////////////////////////////////////////////////////

        var vm = this;

        onInit();

        function onInit() {
            CategoryService.getAllCategory().then(function (res) {
                var categoreis = res.data;
                JokeService.getAllJoke().then(function (response) {
                    console.log('response =>', response);
                    let _response = response.data;
                    vm.approvedContent = getCategory(_response.approved, categoreis);
                    vm.approvedCount = vm.approvedContent.length;
                    vm.pendingContent = getCategory(_response.pending, categoreis);
                    vm.pendingCount = vm.pendingContent.length;
                    vm.rejectedContent = getCategory(_response.reject, categoreis);
                    vm.rejectedCount = vm.rejectedContent.length;
                    vm.tableParams = new NgTableParams({}, { dataset: vm.approvedContent });
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
                JokeService.changeStatus([nid], isForApprove, null);
            } else {
                RejectReason.getReason({
                    'id': [nid],
                    'data': vm.rejectReason
                });
            }
        }

        this.approveAll = function () {
            let ids = getIds(vm.pendingContent);
            JokeService.changeStatus(ids, true, null);
        }

        this.rejectAll = function () {
            let ids = getIds(vm.pendingContent);
            RejectReason.getReason({
                'id': ids,
                'data': vm.rejectReason
            });
        }

        vm.stripHtml = function (html) {
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

        this.isAllContentEnabled = function () {
            return !_.some(vm.pendingContent, function (item) {
                return item.selected;
            });
        }
    }
})();