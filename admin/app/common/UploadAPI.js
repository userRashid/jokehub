(function () {
    'use strict';

    angular
        .module('jokehubApp.common')
        .factory('UploadAPI', _Upload);

    _Upload.$inject = ['API_URL', '$http', '$q', 'Session'];

    function _Upload(API_URL, $http, $q, Session) {
        return {
            _post: _post
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
                headers: headers,
                transformRequest: function (data) {
                    var formData = new FormData();
                    formData.append("_imageData", data);
                    return formData;
                }
            };
            if (data !== undefined) {
                request.data = data;
            }
            console.log(method + ' Called =>', request);
            var _h = $q.defer();
            $http(request).then(function (response) {
                if (response.hasOwnProperty('data') && response.data.hasOwnProperty('errorCode')) {
                    _h.reject(response);
                } else {
                    _h.resolve(response);
                }
            }, function (response) {
                if (response.status == 408) {
                    Session.remove('token');
                }
                if (apiPath === 'authenticate') {
                    _h.reject(response);
                }
            });
            return _h.promise;
        }

        ///////////////////////////////////////////////

        function _post(_url, _data, _headers) {
            if (_headers === undefined) _headers = {};
            return httpRequest('POST', _url, _headers, _data)
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