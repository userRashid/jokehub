(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('Http', _Http);

    _Http.$inject = ['API_URL', '$http', '$q', 'Session', 'Dialog', 'ERROR_MSG'];

    function _Http(API_URL, $http, $q, Session, Dialog, ERROR_MSG) {
        return {
            _get: _get,
            _post: _post,
            _put: _put,
            _delete: _delete
        }

        ///////////////////////////////////////////////
        // Locals
        ///////////////////////////////////////////////

        function httpRequest(method, apiPath, headers, data) {

            if (headers === undefined || !angular.isObject(headers)) {
                headers = {};
            }

            headers = injectHeader(headers);
            var request = {
                method: method,
                url: API_URL + apiPath,
                headers: headers
            };
            if (data !== undefined) {
                request.data = data;
            }
            console.log(method + ' Called =>', request);
            var _h = $q.defer();
            $http(request).then(function (response) {
                if (response.status == 202) {
                    Dialog.createDialog({
                        'message': response.data
                    })
                } else if (response.hasOwnProperty('data') && response.data.hasOwnProperty('errorCode')) {
                    let errorMsg = ERROR_MSG[response.data.errorCode];
                    response.data.errorMsg = errorMsg;
                    _h.reject(response);
                } else {
                    _h.resolve(response);
                }
            }, function (response) {
                if (response.status == 408) {
                    Session.remove('token');
                    //Session.remove('username');
                    //Session.remove('user_name');
                }
                if (apiPath === 'authenticate') {
                    _h.reject(response);
                }
            });
            return _h.promise;
        }

        ///////////////////////////////////////////////


        function _get(_url, _data, _headers) {
            if (_headers === undefined) _headers = {};
            return httpRequest('GET', _url, _headers, _data);
        }

        function _post(_url, _data, _headers) {
            if (_headers === undefined) _headers = {};
            return httpRequest('POST', _url, _headers, _data)
        }

        function _put(_url, _data, _headers) {
            if (_headers === undefined) _headers = {};
            return httpRequest('PUT', _url, _headers, _data)
        }

        function _delete(_url, _data, _headers) {
            if (_headers === undefined) _headers = {};
            return httpRequest('DELETE', _url, _headers)
        }

        function injectHeader(headers) {
            function inject(key) {
                if (Session.get(key) !== null) {
                    headers['Authorization'] = Session.get(key);
                }
            }
            inject('token');
            return headers;
        }
    }
})();