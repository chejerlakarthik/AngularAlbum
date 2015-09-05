album.controller('AlbumViewController', AlbumViewController);

function AlbumViewController($scope, $routeParams, albumProvider) {
	$scope.album_name = $routeParams.album_name;
	$scope.load_error_message = "";

	var photos = albumProvider.getAlbumByName($scope.album_name);
	
	if(!photos){
		$scope.load_error_message = "Could not find an album with that name";
	}else{
		$scope.photos = photos;
		console.log($scope.photos);
	}
	
};

