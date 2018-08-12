(function () {
    'use strict';

    angular
        .module('jokehubApp.user')
        .controller('UserDetailController', _UserDetailController);

    _UserDetailController.$inject = ['UserService', '$stateParams'];

    function _UserDetailController(UserService, $stateParams) {

        var vm = this;
        var userId = $stateParams.userId;

        function Onint() {
            UserService.getUserDetails(userId).then(function (response) {
                vm.userDetails = response.user;
                vm.approvedPaymentPending = response.approvedPaymentPending;
                vm.approvedAndPaid = response.approvedAndPaid;
                vm.pendingStatus = response.pendingStatus;
                vm.rejectedStatus = response.rejectedStatus;
                vm.payments = [];
                vm.finallyPaid = [];
            });
        }

        Onint();

        this.stripHtml = function (html) {
            var tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }

    }
})();