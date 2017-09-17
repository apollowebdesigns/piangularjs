describe('Users factory', function() {
    var driveService, $httpBackend, forwardsRequestHandler;

    beforeEach(angular.mock.module('app'));

    var windowObj = {location: {href: 'http://localhost:8888/hits/forwards'}};

    beforeEach(angular.mock.module(function($provide) {
        $provide.value('$window', windowObj);
    }));

    beforeEach(inject(function(_driveService_, $injector) {
        driveService = _driveService_;
        $httpBackend = $injector.get('$httpBackend');
        forwardsRequestHandler = $httpBackend.when('GET', '/auth.py')
            .respond({userId: 'userX'}, {'A-Token': 'xxx'});
    }));

    it('should be defined', function() {
        var ishere = angular.isDefined(driveService);
        expect(ishere).toEqual(true);
    });

    it('whats the window?', function() {
        expect(windowObj.location.href).toEqual('http://localhost:8888/hits/forwards');
    });

    it('getIpAddress should return something useful', function() {
        spyOn(driveService, 'getIpAddress').and.returnValue('http://localhost:8888/hits/forwards');
        expect(driveService.getIpAddress()).toEqual('http://localhost:8888/hits/forwards');
    });

    // it('rewinds object', function() {
    //     spyOn(driveService, 'getUrl').and.returnValue('http://localhost:8888/');
    //     spyOn(driveService, 'driveForwards').and.returnValue('complete');
    //     expect(driveService.rewind('http://localhost:8888/hits/forwards')).toEqual('http://localhost:8888/hits/forwards');
    // });
});