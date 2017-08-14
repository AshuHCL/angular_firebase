//define a module
var angularFirebaseApp = angular.module("angularFirebaseApp", ["ngRoute"]);

angularFirebaseApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/views/main.html",
        controller : "mainCtrl",
    })
    .when("/login", {
        templateUrl : "/app/views/login.html",
        controller : "loginCtrl",
    })
    .when("/register", {
        templateUrl : "/app/views/register.html",
        controller : "regCtrl",
    })
    .when("/users", {
        templateUrl : "/app/views/users.html",
        controller : "userCtrl",
    })
    .otherwise({
        redirectTo: "/"
    });
});
