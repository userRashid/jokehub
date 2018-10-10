(function () {
    'use strict';

    angular
        .module('jokehubApp.user')
        .controller('UserDetailController', _UserDetailController);

    _UserDetailController.$inject = ['UserService', '$stateParams', '$sce'];

    function _UserDetailController(UserService, $stateParams, $sce) {

        /////////////////////////////////////////////////////////////
        //
        /////////////////////////////////////////////////////////////

        function removedSelected(ids, data) {
            console.log('ids, data =>', ids, data);
            return _.filter(data, function (item) {
                return ids.indexOf(item.id) == -1;
            });
        }

        /////////////////////////////////////////////////////////////

        var vm = this;
        var userId = $stateParams.userId;

        function Onint() {
            UserService.getUserDetails(userId).then(function (response) {
                vm.userDetails = response.user;
                vm.approvedPaymentPending = response.approvedPaymentPending;
                vm.approvedAndPaid = response.approvedAndPaid;
                vm.pendingStatus = response.pendingStatus;
                vm.rejectedStatus = response.rejectedStatus;
                vm.payments = response.payments;
                vm.accountDetail = response.accountDetail;
                vm.finallyPaid = [];
            });
        }

        Onint();

        this.stripHtml = function (html) {
            var tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }

        this.selectAllApprovedPaymentPending = function () {
            vm.approvedPaymentPending.forEach(item => {
                item.selected = !vm.isAllApprovedPaymentPendingSelected;
            });
        }

        this.isAllApprovedPaymentEnabled = function () {
            return !_.some(vm.approvedPaymentPending, function (item) {
                return item.selected;
            });
        }

        this.selectForApprovedPayment = function () {
            let _temp = [];
            let _data = _.filter(vm.approvedPaymentPending, function (item) {
                return item.selected;
            });

            _data.forEach(function (item) {
                _temp.push(item.id);
            });
            vm.ids = _temp;
        }

        this.approvedPayment = function (data) {
            var model = { 'ids': vm.ids, 'cost': data, 'userId': userId };
            UserService.updatePayments(model).then(function () {
                vm.approvedPaymentPending = removedSelected(vm.ids, vm.approvedPaymentPending);
            });
        }

        this.selectAllMakePayment = function () {
            vm.approvedAndPaid.forEach(item => {
                item.selected = !vm.iAllMakePaymentSelected;
            });
        }

        this.isAllMakePaymentEnabled = function () {
            return !_.some(vm.approvedAndPaid, function (item) {
                return item.selected;
            });
        }

        this.selectForMakePayment = function () {
            let _temp = [];
            vm.moneyPaid = 0;
            let _data = _.filter(vm.approvedAndPaid, function (item) {
                return item.selected;
            });

            _data.forEach(function (item) {
                _temp.push(item.id);
                vm.moneyPaid += parseInt(item.amount);
            });
            vm.paymentsIds = _temp;
        }

        this.view = function (row) {
            this.viewData = row;
        }

        this.displayDescription = function (html) {
            return $sce.trustAsHtml(html);
        }

        this.makePayment = function () {
            var model = { 'ids': vm.paymentsIds, 'mode': vm.paymentMode, 'note': vm.paymentNote, 'userId': userId, 'moneyPaid': vm.moneyPaid };
            UserService.makePayment(model).then(function () {
                vm.approvedAndPaid = removedSelected(vm.paymentsIds, vm.approvedAndPaid);
            });
        }
    }
})();