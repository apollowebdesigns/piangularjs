angular
    .module('app')
    .service('exitService', exitService);

exitService.$inject = ['$http', '$log'];

function exitService ($http, $log) {
    //killing the pi
    this.killPi = _killPi;

    function getIpAddress() {
        var url = window.location.href;
        var end = window.location.href.toString().indexOf("/#");
        var resultUrl = url.slice(0, end);
        return resultUrl;
    }

    function _killPi() {
        $log.info('killing the pi');
        return $http.get(getIpAddress() + ":8888/hits/kill")
            .then(function() {
                $log.info('server stopped');
            });
    }
}