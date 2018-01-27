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

        function _setModel() {

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