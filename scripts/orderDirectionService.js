angular
    .module('app')
    .service('orderDirectionService', orderDirectionService);

orderDirectionService.$inject = ['$http', '$log'];

/**
 * Service controls Raspberry Pi Preset Orders
 * @param $http
 * @param $log
 */
function orderDirectionService ($http, $log) {
    this.requestedData = "";
    this.driveForwards = _orderForwards;
    this.driveBackwards = _orderBackwards;
    this.driveLeft = _orderLeft;
    this.driveRight = _orderRight;

    function getIpAddress() {
        var url = window.location.href;
        var end = window.location.href.toString().indexOf("/#");
        var resultUrl = url.slice(0, end);
        return resultUrl;
    }

    function _orderForwards() {
        $log.info('driving function entered function entered');
        return $http.get(getIpAddress() + ":8888/hits/forwardsorder")
            .then(function(response) {
                $log.info('forwardsorder carried out');
                this.requestedData = "";
                this.requestedData.concat(response.data);
            });
    }

    function _orderBackwards() {
        $log.info('driving function entered function entered');
        return $http.get(getIpAddress() + ":8888/hits/backwardsorder")
            .then(function(response) {
                $log.info('backwardsorder carried out');
                this.requestedData = "";
                this.requestedData.concat(response.data);
            });
    }

    function _orderLeft() {
        $log.info('driving function entered function entered');
        return $http.get(getIpAddress() + ":8888/hits/leftorder")
            .then(function(response) {
                $log.info('leftorder carried out');
                this.requestedData = "";
                this.requestedData.concat(response.data);
            });
    }

    function _orderRight() {
        $log.info('driving function entered function entered');
        return $http.get(getIpAddress() + ":8888/hits/rightorder")
            .then(function(response) {
                $log.info('rightorder carried out');
                this.requestedData = "";
                this.requestedData.concat(response.data);
            });
    }
}