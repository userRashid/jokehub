(function () {
    'use strict';

    angular
        .module('jokehubApp.user')
        .controller('ManageUserController', _ManageUserController);

    _ManageUserController.$inject = ['UserService', 'Dialog'];

    function _ManageUserController(UserService, Dialog) {

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

        function Onint() {
            UserService.getAllUser().then(function (response) {
                vm.users = response.data;
                vm.activeUsers = getContentStatus(response.data, '1');
                vm.activeUsersCount = vm.activeUsers.length;

                vm.inActiveUsers = getContentStatus(response.data, '0');
                vm.inActiveUsersCount = vm.inActiveUsers.length;

                vm.registerPendingUsers = getContentStatus(response.data, '2');
                vm.registerPendingUsersCount = vm.registerPendingUsers.length;

                vm.deletedUsers = getContentStatus(response.data, '3');
                vm.deletedUsersCount = vm.deletedUsers.length;
            });
        }

        Onint();

        vm.viewUser = function (data) {
            vm.viewData = data;
        }

        vm.totalContent = function (data) {
            if (data === undefined) return 0;
            let _count = 0;
            _count += data.approve !== undefined ? data.approve : 0;
            _count += data.pending !== undefined ? data.pending : 0;
            _count += data.reject !== undefined ? data.reject : 0;
            return _count;
        }

        vm.deleteUser = function (data) {
            var userId = data.id;
            UserService.deleteUser(userId);
        }
    }
})();