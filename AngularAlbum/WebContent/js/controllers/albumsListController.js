album.controller('AlbumsListController', AlbumsListController);

function AlbumsListController($scope, $location, albumProvider, $modal) {

	$scope.newAlbum = {};
	$scope.validation_error_message = "";

	$scope.albums = albumProvider.getAlbums();

	$scope.addAlbum = function(newAlbum) {
		try {
			albumProvider.addAlbums($scope.newAlbum);
			$scope.newAlbum = {};
			$scope.validation_error_message = "";
		} catch (e) {
			$scope.validation_error_message = e.message;
		}
	};

	$scope.resetForm = function() {
		$scope.newAlbum = {};
		$scope.validation_error_message = "";
	};

	$scope.openAddAlbumDialog = function() {
		var addAlbumDialog = $modal.open({
			size : "sm",
			templateUrl : 'myModalContent.html',
			controller : AddAlbumDialogController,
			resolve : {}
		});

		addAlbumDialog.result.then(function(album_name) {
			$location.path("/album/" + album_name);
		}, function() {
			console.info('Modal dismissed at: ' + new Date());
		});
	};
};

function AddAlbumDialogController ($scope, $location, $modalInstance, albumProvider) {
    $scope.add_album_error = "";
    $scope.adding_album = {};

    $scope.addAlbum = function (new_album) {
        albumProvider.addAlbum(new_album, function (err, album) {
            if (err) {
                if (err.code == "missing_title")
                    $scope.add_album_error = "You need to give a title";
                else if (err.code == "missing_description")
                    $scope.add_album_error = "You need to give a description";
                else if (err.code == "missing_date")
                    $scope.add_album_error = "You need to give a date";
                else if (err.code == "missing_name")
                    $scope.add_album_error = "You need to give a name";
                else if (err.code == "bad_date")
                    $scope.add_album_error = "That doesn't look like a good date.";
                else if (err.code == "duplicate_album_name")
                    $scope.add_album_error = "An album of that name already exists!";
                else 
                    $scope.add_album_error = "A completely unexpected error occurred: " + err.code + " " + err.message;
            } else {
                $modalInstance.close($scope.adding_album.name);
            }
        });
        new_album = {};
        $modalInstance.close($scope.adding_album.name);
    };



    $scope.ok = function () {
        $scope.addAlbum($scope.adding_album);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

album.controller("AddAlbumDialogController", AddAlbumDialogController);