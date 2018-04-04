var app = angular.module('learning');
app.factory('loginService', function () {    
    var isAuth = false;
    var username = 'admin';
    var password = 'password';
    return {
        loginCheck: function(user,pass){
            if (user === username && pass === password) {
                isAuth = true;
            }
            return isAuth;
        },
        isauthenicated: function() {
            return isAuth;
        }
    }
}
);
