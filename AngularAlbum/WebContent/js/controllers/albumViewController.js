album.controller('AlbumViewController', AlbumViewController);

function AlbumViewController($scope, $routeParams) {
	$scope.album_name = $routeParams.album_name;
	$scope.load_error_message = "";

	var photos = {
		"australia" : [ {
			filename : 'australia-T01.jpg',
			description : 'Sydney Opera House'
		}, {
			filename : 'australia-T02.jpg',
			description : 'Australia\'s national animal - kangaroo'
		}, ],
		"china" : [ {
			filename : 'china-T01.jpg',
			description : 'Great wall of China'
		}, {
			filename : 'china-T02.jpg',
			description : 'The city of Beijing'
		}, ],
		"india" : [ {
			filename : 'india-T01.jpg',
			description : 'Kashmir - Paradise on earth'
		}, {
			filename : 'india-T02.jpg',
			description : 'Taj Mahal - Wonder of the World'
		}, ],
		"thailand" : [ {
			filename : 'thailand-T01.jpg',
			description : 'Bangkok city'
		}, {
			filename : 'thailand-T02.jpg',
			description : 'Restaurant near by lake'
		}, ],
		"united kingdom" : [ {
			filename : 'united kingdom-T01.jpg',
			description : 'London bridge'
		}, {
			filename : 'united kingdom-T02.jpg',
			description : 'Lords Cricket Ground - Home of Cricket'
		}, ]
	};

	if (photos[$scope.album_name]) {
		$scope.photos = photos[$scope.album_name];
	} else {
		$scope.load_error_message = "Could not find an album with that name";
	}
};

