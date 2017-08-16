'use strict';

angularFirebaseApp.controller('userCtrl', ['$scope', '$state', 'md5', 'auth', 'profile', 
	function ($scope, $state, md5, auth, profile) {
    
    $scope.currentLocation = "We are currently on User Page";
    
    $scope.profile = profile;

    $scope.updateProfile = function() {
	  $scope.profile.emailHash = md5.createHash(auth.email);
	  $scope.profile.$save().then(function(){
	    $state.go('channels');
	  });
	};
}]);