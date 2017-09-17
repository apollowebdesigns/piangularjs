angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'templates/home.html'
        };

        var mapState = {
            name: 'map',
            url: '/map',
            templateUrl: 'templates/map.html'
        };

        var ordersState = {
            name: 'orders',
            url: '/orders',
            templateUrl: 'templates/orders.html'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            templateUrl: 'templates/about.html'
        };

        $urlRouterProvider.when('', '/');
        $stateProvider.state(homeState);
        $stateProvider.state(mapState);
        $stateProvider.state(ordersState);
        $stateProvider.state(aboutState);
});