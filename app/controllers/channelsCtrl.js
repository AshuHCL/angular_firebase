'use strict';

angularFirebaseApp.controller('channelsCtrl', ['$scope', '$state', 'Auth', 'Users', 'profile', 'channels', 
	function($scope, $state, Auth, Users, profile, channels){
    $scope.profile = profile;
	$scope.channels = channels;
	$scope.getDisplayName = Users.getDisplayName;
	$scope.getGravatar = Users.getGravatar;

	$scope.logout = function(){
	  Auth.$signOut().then(function(){
	    $state.go('home');
	  });
	};
}]);