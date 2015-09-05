album.controller('AlbumsListController', AlbumsListController);

function AlbumsListController($scope, albumProvider){
	
	$scope.newAlbum = {};
	$scope.validation_error_message = "";
	
	$scope.albums = albumProvider.getAlbums();
	
	$scope.addAlbum = function(newAlbum){
			try{
				albumProvider.addAlbums($scope.newAlbum);
				$scope.newAlbum = {};
				$scope.validation_error_message = "";
			}catch(e){
				$scope.validation_error_message = e.message;
			}
		};
};