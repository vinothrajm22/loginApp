'user strict';
angular.module('learning')
    .controller('loginController',['$scope', '$rootScope', '$stateParams', '$state','loginService',function($scope, $rootScope, $stateParams, $state, loginService) {
        $scope.data="";
        $scope.validateUser = function($valid) {
            if ($valid) {
                var output =  loginService.loginCheck($scope.username,$scope.password);
                if (output) {
                    $state.go('dashboard');
                }                
            }  
        }
    }]);