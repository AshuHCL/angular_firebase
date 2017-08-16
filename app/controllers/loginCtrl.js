'use strict';

angularFirebaseApp.controller('loginCtrl', ['$scope', '$state', 'Auth', function ($scope, $state, Auth) {
    
    $scope.currentLocation = "We are currently on Login Page";

    $scope.user = {
		username: '',
    	email: '',
      	password: '',
      	confirm_password: ''
    };
    
	$scope.login = function (){
	  	Auth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password).then(function (auth){
	    	$state.go('users');
	  	}, function (error){
	    	$scope.error = error;
	  	});
	};
}]);