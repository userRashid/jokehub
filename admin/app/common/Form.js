(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('Form', _Form);

    _Form.$inject = ['FORMS'];

    function _Form(FORMS) {
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
            var tempModel = {};
            for (var key in this.data) {
                tempModel[this.data[key].name] = this.data[key].model;
            }
            return tempModel;
        }

        function _reset() {
            var tempModel = {};
            for (var key in this.data) {
                this.data[key].model = '';
            }
        }
    }
})();