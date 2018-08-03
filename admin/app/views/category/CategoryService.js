(function () {
    angular.module('jokehubApp.category')
        .factory('CategoryService', _CategoryService);

    _CategoryService.$inject = ['Http', 'Notification', '$state'];

    function _CategoryService(Http, Notification, _state) {
        return {
            getAllCategory: _getAllCategory,
            createCategory: _createCategory,
            updateCategory: _updateCategory,
            modifyStatus: _modifyStatus
        }

        function _getAllCategory(model) {
            return Http._get('category/all');
        }

        function _createCategory(data) {
            return Http._post('category/add', data).then(function (response) {
                Notification.notify('success', 'Success', 'New Category added');
                _state.go('jokehub.manageCategory');
            }, function (error) {
                console.log('error', error);
            });
        }

        function _updateCategory(data, id) {
            return Http._put('category/' + id, data).then(function (response) {
                Notification.notify('success', 'Success', 'Category updated');
                _state.go('jokehub.manageCategory');
            }, function (error) {
                console.log('error', error);
            });
        }

        function _modifyStatus(data) {
            var model = [];
            var url = '';
            if (data.isActive === '1') {
                model.push(data.nid);
                url = 'content/unpublish';
            } else {
                model.push(data.nid);
                url = 'content/publish';
            }
            Http._post(url, model).then(function () {
                console.log('Called');
                Notification.notify('success', 'Success', ' Content modified successfully');
            });
        }
    }
})();