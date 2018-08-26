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
        })
        .constant('ERROR_MSG', {
            '1001': 'The email address you have entered is already registered, Please user \'Forgot Password\' to reset your password.'
            , '1003': 'The email address you have entered is not registered with us, Please \'Create Account\' and then confirm email.'
            , '1004': 'The reset password link is expire.'
        });
})();