(function () {
    angular.module('jokehubApp.category')
        .factory('CategoryService', _CategoryService);

    _CategoryService.$inject = ['Http', 'Notification'];

    function _CategoryService(Http, Notification) {
        return {
            getAllCategory: _getAllCategory,
            createCategory: _createCategory
        }

        function _getAllCategory(model) {
            return Http._get('api/category/all');
        }

        function _createCategory(data) {
            return Http._post('api/category/add', data).then(function (response) {
                Notification.notify('success', 'Success', ' New Category added ');
            });
        }
    }
})();