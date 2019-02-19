(function () {
    'use strict';

    angular
        .module('app_module.licensecontroller', [])
        .controller('LicenseController', LicenseController);

    LicenseController.$inject = ['LemorasService', '$rootScope'];
    function LicenseController(LemorasService, $rootScope) {
        var vm = this;

    }

})();