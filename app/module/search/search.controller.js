(function () {
    'use strict';

    angular
        .module('app_module.searchcontroller', [])
        .controller('SearchController', SearchController);

    SearchController.$inject = ['UserService', '$rootScope'];
    function SearchController(UserService, $rootScope) {
        var vm = this;

    }

})();