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
                addJoke:
                    [{
                        label: 'Category'
                        , name: 'Category'
                        , type: 'dlText'
                    }, {
                        label: 'Joke'
                        , name: 'JokeContent'
                        , type: 'dlTextarea'
                    }],
                addCategory: [
                    {
                        label: 'Category Name'
                        , name: 'CategoryName'
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