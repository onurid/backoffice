(function () {
    'use strict';

    angular
        .module('app_module.settingscontroller')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['SettingsService', '$rootScope'];
    function SettingsController(SettingsService, $rootScope) {
        var vm = this;

    }

})();