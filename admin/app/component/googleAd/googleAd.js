(function () {
    'use strict';
    angular.module('jokehubApp.component')
        .directive('googleAd', _googleAd);

    _googleAd.$inject = ['$timeout'];

    function _googleAd($timeout) {
        return {
            restrict: 'A'
            , link: link
        }

        function link(scope, element, attr) {
            return $timeout(function () {
                let adsbygoogle, html, rand;
                rand = Math.random();
                html = '<ins class="adsbygoogle" data-ad-layout-key="-hi-2g+2q+4+7h" data-ad-client="ca-pub-4726118730031366" data-ad-slot="5916714852" style="display:block" data-ad-format="fluid"></ins>'
                $(element).append(html);
                return (adsbygoogle = window.adsbygoogle || []).push({});
            });
        }
    }
})();