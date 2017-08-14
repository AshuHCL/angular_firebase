//define a module
var angularFirebaseApp = angular.module("angularFirebaseApp", ["ngRoute"]);

angularFirebaseApp.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "/app/views/main.html",
        controller : "mainCtrl",
    })
    .otherwise({
        redirectTo: "/main"
    });
});
