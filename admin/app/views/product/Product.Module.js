(function () {
    angular.module('jokehubApp.product', [])
        .config(config);

    function config($stateProvider) {

        $stateProvider.state('jokehub.addProduct', {
            url: '/add-product',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/product/add-product/add-product.html',
                    controller: 'AddProductController as vm'
                }
            }
        }).state('jokehub.manageProduct', {
            url: '/manage-product',
            views: {
                'content@jokehub': {
                    templateUrl: 'app/views/product/manage-product/manage-product.html',
                    controller: 'ManageProductController as vm'
                }
            }
        });
    };
})();