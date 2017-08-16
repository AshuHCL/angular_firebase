'use strict';

angularFirebaseApp.controller('regCtrl', ['$scope','$state', 'Auth', function ($scope, $state, Auth) {
    
    $scope.currentLocation = "We are currently on Registration Page";

	$scope.user = {
		username: '',
    	email: '',
      	password: '',
      	confirm_password: ''
    };


	$scope.register = function (){
	  	Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password).then(function (user){
			$state.go('users');
	  	}, function (error){
	    	$scope.error = error;
	  	});
	};

}]);