(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('Form', _Form);

    _Form.$inject = ['FORMS', 'UploadAPI', '$q'];

    function _Form(FORMS, UploadAPI, $q) {
        return {
            getForm: _getForm,
            getFormFunction: _getFormFunction
        }

        function _getForm(formName) {
            return {
                data: FORMS[formName],
                setModel: _setModel,
                getModel: _getModel,
                reset: _reset
            }
        }

        function _getFormFunction(fromData) {
            return {
                data: fromData,
                setModel: _setModel,
                getModel: _getModel,
                reset: _reset
            }
        }

        function _setModel(models) {
            console.log('models =>', models);
            this.data.forEach(e => {
                for (var key in models) {
                    if (e.name === KeyConstant[key]) {
                        if (e.type === 'dlMultiSelect') {
                            console.log('Need to work on it', key, e);
                        } else {
                            e.model = models[key];
                        }
                    }
                }
            });
        }

        function _getModel() {
            var _d = $q.defer();
            var tempModel = {};
            var imageModel = [];
            for (var key in this.data) {
                if (this.data[key].type === 'dlUpload') {
                    var _data = this.data[key].model;
                    var _name = this.data[key].name;
                    var _model = { data: _data, name: _name };
                    imageModel.push(_model);
                } else {
                    tempModel[this.data[key].name] = this.data[key].model;
                }
            }
            if (imageModel.length > 0) {
                UploadAPI._post('upload', imageModel, { "Content-Type": undefined }).then(function (_response) {
                    _response.data.forEach(function (item) {
                        for (var _k in item) {
                            tempModel[_k] = item[_k];
                        }
                    });
                    _d.resolve(tempModel);
                });
            } else {
                _d.resolve(tempModel);
            }
            return _d.promise;
        }

        function _reset() {
            var tempModel = {};
            for (var key in this.data) {
                this.data[key].model = '';
            }
        }
    }
})();