(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('FormData', _FormData);

    _FormData.$inject = [];

    function _FormData() {
        return {
            getForm: _getForm
        }

        function _getFormData() {
            return {
                addProduct:
                    [{
                        label: 'Product Name'
                        , name: 'ProductName'
                        , type: 'dlText'
                    }, {
                        label: 'Product Description'
                        , name: 'ProductDescription'
                        , type: 'dlTextarea'
                    }, {
                        label: 'Total Quantity'
                        , name: 'TotalQuantity'
                        , type: 'dlText'
                    }, {
                        label: 'Product Specification'
                        , name: 'ProductSpecification'
                        , type: 'dlTextarea'
                        , placeholder: 'Comment...'
                    }, {
                        label: 'Price'
                        , name: 'Price'
                        , type: 'dlText'
                    }, {
                        label: 'Is Active'
                        , name: 'IsActive'
                        , type: 'dlCheckbox'
                        , default: null
                    }],
                addCategory: [
                    {
                        label: 'Category Name'
                        , name: 'CategoryName'
                        , type: 'dlText'
                    }, {
                        label: 'Category Header'
                        , name: 'Header'
                        , type: 'dlText'
                    }, {
                        label: 'Category Description'
                        , name: 'Description'
                        , type: 'dlTextarea'
                    }
                ]
            }
        }

        function _getForm(formName) {
            var _formData = _getFormData();
            return _formData[formName];
        }
    }
})();