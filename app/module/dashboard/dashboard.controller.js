(function () {
    'use strict';

    angular
        .module('app_module.dashboardcontroller', [])
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['DashboardService', '$rootScope'];
    function DashboardController(DashboardService, $rootScope) {
        var vm = this;

    }

})();