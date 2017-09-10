angular
    .module('app')
    .service('exitService', exitService);

exitService.$inject = ['$http', '$log'];

function exitService ($http, $log) {
    //killing the pi
    this.killPi = _killPi;

    function getIpAddress() {
        var url = window.location.href;
        url = url.substring(0, url.length - 1);
        return url;
    }

    function _killPi() {
        $log.info('killing the pi');
        return $http.get(getIpAddress() + ":8888/hits/kill")
            .then(function() {
                $log.info('server stopped');
            });
    }
}