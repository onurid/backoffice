(function () {
    'use strict';

    angular
        .module('app_module.paymentmethodcontroller', [])
        .controller('PaymentMethodController', PaymentMethodController);

    PaymentMethodController.$inject = ['PaymentService', '$rootScope'];
    function PaymentMethodController(PaymentService, $rootScope) {
        var vm = this;

    }

})();