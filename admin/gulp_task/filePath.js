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
            './node_modules/angular-trix/dist/angular-trix.js'
        ];
    }

    this.getCssPath = function () {
        return [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/font-awesome/css/font-awesome.css',
            './node_modules/angular-toastr/dist/angular-toastr.css',
            './node_modules/trix/dist/trix.css',
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