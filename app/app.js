//define a module
var angularFirebaseApp = angular.module("angularFirebaseApp", ['firebase',
    'angular-md5',
    'ui.router'
  ]);

angularFirebaseApp.config(function(){
    var config = {
        apiKey: "AIzaSyCzUUz39B5vxdUi9rk4F6bGIxGN-cPCZRs",
        authDomain: "angularfirebase-c9887.firebaseapp.com",
        databaseURL: "https://angularfirebase-c9887.firebaseio.com",
        projectId: "angularfirebase-c9887",
        storageBucket: "",
        messagingSenderId: "670578809080"
    };
  firebase.initializeApp(config);
});

angularFirebaseApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'mainCtrl as mainCtrl',
        templateUrl: 'views/main.html'
      })
      .state('login', {
        url: '/login',
        controller: 'loginCtrl as loginCtrl',
        templateUrl: 'views/login.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
              $state.go('home');
            }, function(error){
              return;
            });
          }
        }
      })
      .state('register', {
        url: '/register',
        controller: 'regCtrl as regCtrl',
        templateUrl: 'views/register.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
              $state.go('home');
            }, function(error){
              return;
            });
          }
        }
      })
      .state('users', {
        url: '/users',
        controller: 'userCtrl as userCtrl',
        templateUrl: 'views/users.html',
        resolve: {
          auth: function($state, Users, Auth){
            return Auth.$requireSignIn().catch(function(){
              $state.go('home');
            });
          },
          profile: function(Users, Auth){
            return Auth.$requireSignIn().then(function(auth){
              return Users.getProfile(auth.uid).$loaded();
            });
          }
        }
      })
      .state('channels', {
        url: '/channels',
        resolve: {
          channels: function (Channels){
            return Channels.$loaded();
          },
          profile: function ($state, Auth, Users){
            return Auth.$requireSignIn().then(function(auth){
              return Users.getProfile(auth.uid).$loaded().then(function (profile){
                if(profile.displayName){
                  return profile;
                } else {
                  $state.go('profile');
                }
              });
            }, function(error){
              $state.go('home');
            });
          }
        },
        controller: 'channelsCtrl as channelsCtrl',
        templateUrl: 'views/channels.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
              $state.go('channels');
            }, function(error){
              return;
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
})

angularFirebaseApp.constant('FirebaseUrl', 'https://angularfirebase-c9887.firebaseio.com/');

