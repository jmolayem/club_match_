(function() {
    'use strict';

    angular
        .module('app.examples.forms')
        .controller('FormWizardController', FormWizardController);

    /* @ngInject */
    function formController($firebaseArray) {
        var vm = this;
        var dbref = firebase.database().ref()
        vm.users = $firebaseArray(dbref)
        vm.create = function(){
            console.log(vm.data.account)
            vm.users.$add(vm.data.account)
        }
    }
})();
