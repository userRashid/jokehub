(function () {
    'use strict';

    angular
        .module('jokehubApp.joke')
        .controller('ManageJokeController', _ManageJokeController);

    _ManageJokeController.$inject = ['JokeService', '$sce', 'CategoryService', 'RejectReason', 'AdministratorService', 'NgTableParams', '$state'];

    function _ManageJokeController(JokeService, $sce, CategoryService, RejectReason, AdministratorService, NgTableParams, $state) {

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
        vm._state = $state;

        onInit();

        function onInit() {
            CategoryService.getAllCategory().then(function (res) {
                var categoreis = res.data;
                JokeService.getAllJoke().then(function (response) {
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

        this.isAllContentEnabled = function () {
            return !_.some(vm.pendingContent, function (item) {
                return item.selected;
            });
        }
    }
})();