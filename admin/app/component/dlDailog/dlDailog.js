(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .factory('Dialog', _Dialog);

    _Dialog.$inject = ['$document', '$compile', '$rootScope'];

    function _Dialog($document, $compile, $rootScope) {

        var _body = $document.find('body');

        ////////////////////////////////////

        return {
            createDialog: _createDialog
        }

        function _createDialog(options) {

            var _html = getHtml();
            _body.addClass("modal-open");

            var _scope = options.scope || $rootScope.$new();
            _scope.message = options.message;

            var _closeFn = function () {
                _body.unbind('keydown', _handleEscPressed);
                _body.removeClass("modal-open");
                _html.remove();
            };

            _scope.$modalClose = _closeFn;

            _scope.close = function () {
                var _callFn = options.close || _closeFn;
                _scope.$modalClose();
                _callFn.call(this);
            }

            _scope.done = function () {
                var _callFn = options.done || _closeFn;
                _scope.$modalClose();
                _callFn.call(this);
            }

            //Handle Key Events

            var _handleEscPressed = function (event) {
                if (event.keyCode === 27) {
                    _closeFn();
                }
            };

            _html.on('click', function (e) {
                var target = $(e.target);
                if (!target.closest('.modal-content').length) {
                    _closeFn();
                }
            });

            _body.bind('keydown', _handleEscPressed);

            _scope.BookingDialogModel = options.BookingDialogModel;
            _scope.formModel = options.formModel;
            $compile(_html)(_scope);
            _body.append(_html);
        }

        function getHtml() {
            var _html = '<div class="modal" style="z-index: 1050; display: block;">' +
                '<div class="modal-dialog" role="alert">' +
                '<div class="alert alert-warning alert-dismissible fade show">' +
                '<h4 class="alert-heading">Well done!</h4>' +
                '<p>{{message}}</p>' +
                '<hr>' +
                '<p class="mb-0 text-right">- The Joke Hub Team</p>' +
                '<button type="button" ng-click="close()" class="close" data-dismiss="alert" aria-label="Close">' +
                '<span aria-hidden="true">&times;</span>' +
                '</button>' +
                //'<button type="button" class="btn btn-secondary" ng-click="close()">Cancel</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div><div class="modal-backdrop fade show" ng-style="{\'z-index\': 1040}"></div>';
            return angular.element(_html);
        }
    }
})();