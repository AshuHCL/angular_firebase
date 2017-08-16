'use strict';

angularFirebaseApp.controller('mainCtrl', ['$scope','Auth', function ($scope, Auth) {
    
    $scope.currentLocation = "We are currently on Main Page";

 //    // Create a callback which logs the current auth state
	// function authDataCallback(authData) {
	//   	var authData = ref.getAuth();
		
	// 	if (authData) {
	// 		console.log("User " + authData.uid + " is logged in with " + authData.provider);
	// 	} else {
	// 		console.log("User is logged out");
	// 	}
	// }

	// // Create a callback to handle the result of the authentication
	// function authHandler(error, authData) {
	// 	if (error) {
	// 	    console.log("Login Failed!", error);
	// 	} else {
	// 	    console.log("Authenticated successfully with payload:", authData);
	// 	}
	// }

	// var firebaseRef = new Firebase("https://angularfirebase-c9887.firebaseio.com/"); 

 //    $scope.authObj = $firebaseAuth(firebaseRef);
 //    // Register the callback to be fired every time auth state changes
	// firebaseRef.onAuth(authDataCallback);
	
	// $scope.login = function() {
	// 	// Or with an email/password combination
	// 	firebaseRef.authWithPassword({
	// 	  email    : 'bobtony@firebase.com',
	// 	  password : 'correcthorsebatterystaple'
	// 	}, authHandler);

	// 	// Or via google OAuth provider
	// 	firebaseRef.authWithOAuthPopup("google", authHandler);
	// 	firebaseRef.authWithOAuthRedirect("google", authHandler);
	// }

	// $scope.logout = function () {
	// 	firebaseRef.unauth();
	// }

}]);