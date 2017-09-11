describe('Users factory', function() {
    var driveService;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function(_driveService_) {
        driveService = _driveService_;
    }));

    it('should be defined', function() {
        var ishere = angular.isDefined(driveService);
        expect(ishere).toEqual(true);
    });
});