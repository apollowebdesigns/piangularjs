angular
    .module('app')
    .service('ledService', ledService);

ledService.$inject = ['$http', '$log'];

function ledService ($http, $log) {
    this.getData = _getData;
    var uniqueIP = "192.168.1.69", 
        uniqueIPparents = "192.168.1.74";

    function getIpAddress() {
        var url = window.location.href;
        var resultUrl = url.slice(0, 19);
        return resultUrl;
    }

    function _getData() {
        $log.info("light function entered");
        $http.get(getIpAddress() + ":8888/hits/blue")
        .then(function(response) {
            $log.info('data received');
            this.requestedData = response.data;
        });
    }
}