angular
    .module('app')
    .controller('DebugController', DebugController);

DebugController.$inject = ['rewindFactory'];

function DebugController(rewindFactory) {
    let vm = this;
    vm.rewindRequests = rewindFactory.rewindRequests;
}
