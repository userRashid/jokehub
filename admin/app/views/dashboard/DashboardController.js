(function () {
    'use strict';

    angular
        .module('jokehubApp.dashboard')
        .controller('DashboardController', _DashboardController);

    _DashboardController.$inject = ['DashboardServices'];

    function _DashboardController(DashboardServices) {
        var vm = this;

        ////////////////////////////////////////////////////////////////////////////

        vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };
        vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        vm.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        };

        /////////////////////////////////////////////////////////////////////////////
        vm.dataOne = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        vm.labelsOne = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        vm.seriesOne = ['Series A', 'Series B'];


        function OnInit() {
            DashboardServices.getAnalytics().then(function (response) {
                vm.analyticalData = response.data.analyticalData;
            });
        }

        OnInit();

    }
})();