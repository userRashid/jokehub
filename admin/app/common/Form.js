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
            this.data.forEach(e => {
                for (var key in models) {
                    if (e.name === key) {
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
            for (var key in this.data) {
                tempModel[this.data[key].name] = this.data[key].model;
            }
            if (tempModel.hasOwnProperty('image')) {
                UploadAPI._post('upload', tempModel, { "Content-Type": undefined }).then(function (_response) {
                    tempModel.imgId = _response.data.imageId;
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