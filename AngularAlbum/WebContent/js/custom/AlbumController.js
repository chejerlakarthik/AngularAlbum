albumApp.controller('AlbumController', AlbumController);

function AlbumController($scope){
	$scope.newAlbum = {};
	$scope.add_album_error_message = "";
	$scope.albums = [{title : 'United Kingdom 2014', date: '2014-01-01', desc: 'Visiting London was always on my checklist' },
					 {title : 'Thailand 2014', date: '2014-06-09', desc: 'Bangkok is a very beautiful place' },
					 {title : 'India 2015', date: '2015-01-01', desc: 'India, better than all other places I ve ever visited' }];
	$scope.addNewAlbum = function(newAlbum){
		
		if(!newAlbum.title)
		{
			$scope.add_album_error_message = "Correct the title!!";
		}
		else if (!newAlbum.date || newAlbum.date.length < 10)
		{
			$scope.add_album_error_message = "Check your date again!!";
		}
		else if (!newAlbum.desc)
		{
			$scope.add_album_error_message = "Check your description again!!";
		}
		else if (!newAlbum.shortName)
		{
			$scope.add_album_error_message = "Did you enter the short name ?";
		}
		else
		{
			// Push the new album into the list. View is automatically updated
			$scope.albums.push(newAlbum);
			// This will clear the new album details from the form once the new album is added to the page
			$scope.newAlbum = {};
			// This will clear any error messages from previous unsuccessful attempts
			$scope.add_album_error_message = "";
		}
	};
};