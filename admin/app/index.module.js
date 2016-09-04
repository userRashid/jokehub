(function() {

    'use strict';

    angular
        .module('rin', [

            // Core
            'app.core',

            // Navigation
            'app.sidebar',
            'app.topbar',

            //Comman
            'app.comman',

            // Views
            'app.login',
            'app.register',
            'app.home',
            'app.category',
            'app.components'
            ,'app.component'
            ,'app.joke'
            ,'app.mainCategory'

        ]);
})();
