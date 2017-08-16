'use strict';

angularFirebaseApp.controller('channelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;
    $scope.profile = profile;
	$scope.channels = channels;
	$scope.getDisplayName = Users.getDisplayName;
	$scope.getGravatar = Users.getGravatar;

	$scope.logout = function(){
	  Auth.$signOut().then(function(){
	    $state.go('home');
	  });
	};
});