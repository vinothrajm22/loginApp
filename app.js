'use strict';
var app = angular.module('learning',[
    'ui.router'
]);

app.run(['$rootScope', '$location', '$state', 'loginService', function ($rootScope, $location, $state, loginService) {
    console.log('run run run');
    console.log(loginService.isauthenicated());
    if (!loginService.isauthenicated()) {
        $state.go('login');
    }
}])

.config(function($stateProvider, $urlRouterProvider) {
    console.log('comes here');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login',{            
            url : '/login',
            templateUrl : '/views/login.html',
            controller : 'loginController',
        })
        .state('dashboard',{            
            url : '/dashboard',
            templateUrl : '/views/dashboard.html',
            controller : 'dashboardController',
        })
});