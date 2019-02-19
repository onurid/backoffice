(function () {
    'use strict';

    angular
        .module('app_module.leavemessagecontroller', [])
        .controller('LeaveMessageController', LeaveMessageController);

    LeaveMessageController.$inject = ['MessageService', '$rootScope'];
    function LeaveMessageController(MessageService, $rootScope) {
        var vm = this;

    }

})();