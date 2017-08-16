//define a module
var angularFirebaseApp = angular.module("angularFirebaseApp", ['ui.router']);

angularFirebaseApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'mainCtrl as mainCtrl',
        templateUrl: 'views/main.html',
      })
      .state('login', {
        url: '/login',
        controller: 'loginCtrl as loginCtrl',
        templateUrl: 'views/login.html',
      })
      .state('register', {
        url: '/register',
        controller: 'regCtrl as regCtrl',
        templateUrl: 'views/register.html',
      })
      .state('users', {
        url: '/users',
        controller: 'userCtrl as userCtrl',
        templateUrl: 'views/users.html',
      })
      .state('channels', {
        url: '/channels',
        controller: 'channelsCtrl as channelsCtrl',
        templateUrl: 'views/channels.html',
      });

    $urlRouterProvider.otherwise('/');
})