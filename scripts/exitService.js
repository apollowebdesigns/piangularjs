angular
    .module('app')
    .service('exitService', exitService);

exitService.$inject = ['$http', '$log'];

function exitService ($http, $log) {
    //killing the pi
    this.killPi = _killPi;

    function _killPi() {
        $log.info('killing the pi');
        return $http.get("http://192.168.1.69:8888/hits/kill")
            .then(function() {
                $log.info('server stopped');
            });
    }
}