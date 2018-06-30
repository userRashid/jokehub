(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('FormData', _FormData);

    _FormData.$inject = ['CategoryService', '$q'];

    function _FormData(CategoryService, $q) {
        return {
            getForm: _getForm
        }

        function categoryData() {
            var _d = $q.defer();
            CategoryService.getAllCategory().then(function (_response) {
                var _temp = [];
                var categories = _.filter(_response.data, function (category) {
                    return category.isActive !== '0';
                });
                categories.forEach(item => {
                    var _obj = {};
                    _obj.key = item.id;
                    _obj.value = item.name;
                    _temp.push(_obj);
                });
                _d.resolve(_temp);
            });
            return _d.promise;
        }

        function _getFormData() {
            return {
                addJoke:
                    [{
                        label: 'Category'
                        , name: 'Category'
                        , type: 'dlSelect'
                        , values: categoryData()
                    }, {
                        label: 'Joke'
                        , name: 'Content'
                        , type: 'dlTextEditor'
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
                    }, {
                        label: 'Image'
                        , name: 'image'
                        , type: 'dlUpload'
                    }
                ],
                addMainCategory: [
                    {
                        label: 'Main Category Name'
                        , name: 'MainCategoryName'
                        , type: 'dlText'
                    }, {
                        label: 'Main Category Description'
                        , name: 'MainCategoryDescription'
                        , type: 'dlTextarea'
                    }
                ],
                changePassword: [
                    {
                        label: 'Old Password'
                        , name: 'OldPassword'
                        , type: 'dlPassword'
                    }, {
                        label: 'New Password'
                        , name: 'NewPassword'
                        , type: 'dlPassword'
                    }, {
                        label: 'Confirm Password'
                        , name: 'ConfirmPassword'
                        , type: 'dlPassword'
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