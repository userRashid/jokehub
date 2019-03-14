exports.FilePath = function () {


    this.getLibsPath = function () {
        return [
            './node_modules/angular/angular.js',
            './node_modules/angular-smart-table/dist/smart-table.js',
            './node_modules/angular-resource/angular-resource.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/jquery/dist/jquery.js',
            './node_modules/tether/dist/js/tether.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/chart.js/dist/Chart.min.js',
            './node_modules/angular-chart.js/dist/angular-chart.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-toastr/dist/angular-toastr.js',
            './node_modules/angular-toastr/dist/angular-toastr.tpls.js',
            './node_modules/trix/dist/trix.js',
            './node_modules/angular-trix/dist/angular-trix.js',
            './node_modules/ng-img-crop/compile/unminified/ng-img-crop.js',
            './node_modules/underscore/underscore-min.js',
            './node_modules/moment/moment.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            './node_modules/textangular/dist/textAngular-rangy.min.js',
            './node_modules/textangular/dist/textAngular-sanitize.min.js',
            './node_modules/textangular/dist/textAngular.min.js',
            './node_modules/textangular/dist/textAngularSetup.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            './node_modules/ng-table/bundles/ng-table.min.js',
            './node_modules/node-vibrant/dist/vibrant.js'
        ];
    }

    this.getCssPath = function () {
        return [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/font-awesome/css/font-awesome.css',
            './node_modules/angular-toastr/dist/angular-toastr.css',
            './node_modules/ng-img-crop/compile/unminified/ng-img-crop.css',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
            './node_modules/textangular/dist/textAngular.css',
            './node_modules/trix/dist/trix.css',
            './node_modules/ng-table/bundles/ng-table.min.css',
            './app/css/*.css',
            './app/**/*.scss'
        ];
    }

    this.getFonts = function () {
        return [
            './node_modules/font-awesome/fonts/*'
        ];
    }

    this.getJsPath = function () {
        return [
            './app/**/*.js'
        ];
    }
}