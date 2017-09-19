angular
    .module('app')
    .service('driveService', driveService);

driveService.$inject = ['$http', '$log', 'rewindFactory'];

/**
 * Service controls Raspberry Pi Movement
 * @param $http
 * @param $log
 * @param rewindFactory
 */
function driveService ($http, $log, rewindFactory) {
    this.driveData = _driveData;
    this.driveForwards = _driveForwards;
    this.driveBackwards = _driveBackwards;
    this.driveRight = _driveRight;
    this.driveLeft = _driveLeft;
    this.rewind = _rewind;
    this.getIpAddress = getIpAddress;
    this.getRewind = _getRewind;

    this.requestedData = "";

    localStorage.rewindRequests = [];

    var uniqueIP = "192.168.1.69";
    var uniqueIPparents = "192.168.1.74";
    var redSdCardIp = "192.168.1.73";

    var vm = this;

    function getIpAddress() {
        var url = window.location.href;
        var resultUrl = url.slice(0, 19);
        return resultUrl;
    }

    function _driveData() {
        $log.info('driving function entered function entered');
        return $http.get(getIpAddress() + ":8888/hits/motor")
        .then(function(response) {
            $log.info('data received');
            this.requestedData = "";
            this.requestedData.concat(response.data);
        });
    }

    function _driveForwards(flag) {
        getIpAddress();
        console.dir("test?");
        $log.info('forwards function entered');
        return $http.get(getIpAddress() + ":8888/hits/forwards")
        .then(function(response) {
            $log.info('forwards hit');
            if (flag === undefined || flag.length === 0) rewindFactory.rewindRequests.push("/hits/backwards");
            this.requestedData = "";
            this.requestedData.concat(response.data);
        });
    }

    function _driveBackwards(flag) {
        $log.info('backwards function entered');
        return $http.get(getIpAddress() + ":8888/hits/backwards")
        .then(function(response) {
            $log.info('backwards hit');
            if (flag === undefined || flag.length === 0) rewindFactory.rewindRequests.push("/hits/forwards");
            this.requestedData = "";
            this.requestedData = response.data;
        });
    }

    function _driveRight(flag) {
        $log.info('right function entered');
        return $http.get(getIpAddress() + ":8888/hits/right")
        .then(function(response) {
            $log.info('right hit');
            if (flag === undefined || flag.length === 0) rewindFactory.rewindRequests.push("/hits/left");
            this.requestedData = "";
            this.requestedData = response.data;
        });
    }

    function _driveLeft(flag) {
        $log.info('left function entered');
        return $http.get(getIpAddress() + ":8888/hits/left")
        .then(function(response) {
            $log.info('left hit');
            if (flag === undefined || flag.length === 0) rewindFactory.rewindRequests.push("/hits/right");
            this.requestedData = "";
            this.requestedData = response.data;
        });
    }

    function _getRewind(arg) {
        switch(arg) {
            case getIpAddress() + ":8888/hits/backwards":
                return _driveBackwards("flagged");
                break;
            case getIpAddress() + ":8888/hits/forwards":
                return _driveForwards("flagged");
                break;
            case getIpAddress() + ":8888/hits/left":
                return _driveLeft("flagged");
                break;
            case getIpAddress() + ":8888/hits/right":
                return _driveRight("flagged");
                break;
        }
    }

    function _rewind() {
        $log.info('left function entered');
        return $http.get(getIpAddress() + ":8888/hits/rewind")
            .then(function(response) {
                $log.info('lets rewind');
                $log.info(response.data)
            });
    }
}