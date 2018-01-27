(function () {
    angular.module('jokehubApp.product')
        .factory('ProductService', _ProductService);

    _ProductService.$inject = ['Http', 'Notification'];

    function _ProductService(Http, Notification) {
        return {
            createProduct: _createProduct,
            getAllProduct: _getAllProduct
        }

        function _createProduct(model) {
            Http._post('api/category/add/product', model).then(function () {
                Notification.notify('success', 'Success', ' New Product added ');
            });
        }

        function _getAllProduct(model) {
            return Http._get('api/products/all');
        }
    }
})();