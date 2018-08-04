(function () {
    'use strict';
    angular.module('jokehubApp.common')
        .factory('RejectReason', _RejectReason);

    _RejectReason.$inject = ['$document', '$compile', '$rootScope', 'JokeService'];

    function _RejectReason($document, $compile, $rootScope, JokeService) {

        var _body = $document.find('body');

        /////////////////////////////////////////////////

        return {
            getReason: _getReason
        }

        function _getReason(options) {

            var _html = getHtml();
            _body.addClass("modal-open");

            var _scope = options.scope || $rootScope.$new();

            _scope.select = {};

            _scope.data = options.data;
            _scope.select.nullValue = '-- Make Selection --';

            var id = options.id;

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
                JokeService.changeStatus(id, false, _scope.rejectReasonId);
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
            var _html = '<div class="modal" style="z-index: 1050;  display: block;">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<h6 class="modal-title" id="filer">Reject Reason</h6>' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '<span aria-hidden="true">×</span>' +
                '</button>' +
                '</div>' +
                '<div class="modal-body">' +
                '<select class="form-control" ng-model="rejectReasonId" ng-options="item.id as item.reason for item in data" >' +
                '<option value="">{{select.nullValue}}</option>' +
                '</select>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-secondary btn-sm" ng-click="close()">Cancel</button>' +
                '<button type="button" class="btn btn-primary btn-sm" ng-click="done()">Reject</button>' +
                '</div></div></div>' +
                '</div><div class="modal-backdrop in" style="opacity: .5"></div>';
            return angular.element(_html);
        }
    }
})();