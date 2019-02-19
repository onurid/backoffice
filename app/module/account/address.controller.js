(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddressController', AddressController);

	AddressController.$inject = ['UserLocalService', '$rootScope'];
    function AddressController(UserLocalService, $rootScope) {
        var vm = this;

        vm.address = null;
        vm.allAddress = [];
        vm.deleteAddress = deleteAddress;

        //initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function addAddress() {
            UserLocalService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserLocalService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteAddress(id) {
            UserLocalService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
    }

})();