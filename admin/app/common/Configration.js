(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .constant('API_URL', 'http://codetute.com/services/')
        .constant('FORMS', {
            AddProduct: {
                ProductName: { model: '' },
                ProductDescription: { model: '' },
                ProductSpecification: { model: '' },
                TotalQuantity: { model: '' },
                Price: { model: '' },
                IsActive: { model: '' }
            }
        });
})();