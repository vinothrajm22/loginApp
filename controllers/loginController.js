'user strict';
angular.module('learning')
    .controller('loginController',['$scope','loginService',function($scope,loginService) {
        $scope.data="";
        $scope.validateUser = function($valid) {
            if ($valid) {
                var output =  loginService.loginCheck($scope.username,$scope.password);
            }
            
               
               
        }
    }]);