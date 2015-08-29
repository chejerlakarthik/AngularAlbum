album.controller('AlbumsListController', AlbumsListController);

function AlbumsListController($scope){
	$scope.albums = [{title : 'United Kingdom 2014', date: '2014-01-01', desc: 'London, here I come', albumName: 'London', imgUrl: 'img/london.jpg' },
					  {title : 'Thailand 2014', date: '2014-06-09', desc: 'Bangkok is a very beautiful place', albumName: 'Thailand', imgUrl: 'img/thailand.jpg'},
					  {title : 'India 2015', date: '2015-01-01', desc: 'India, better than all places I ve visited', albumName: 'India', imgUrl: 'img/india.jpg' },
					  {title : 'China 2016', date: '2016-01-01', desc: 'I am visiting China next year. So excited!!', albumName: 'China', imgUrl: 'img/china.jpg' }];
	$scope.newAlbum = {};
	$scope.validation_error_message = "";
	$scope.addAlbum = function(newAlbum){
		
		if(!newAlbum.title)
		{
			$scope.validation_error_message = "Title isnt entered!!";
		}
		else if (!newAlbum.date || !is_valid_date(newAlbum.date))
		{
			$scope.validation_error_message = "Something is wrong with the date!!";
		}
		else if (!newAlbum.name)
		{
			$scope.validation_error_message = "Did you enter the album short name?";
		}
		else
		{
			$scope.newAlbum.imgUrl = 'img/' + newAlbum.name +'.jpg';
			$scope.albums.push(newAlbum);
			$scope.newAlbum = {};
			$scope.validation_error_message = "";
		};
		
	};
	
	function is_valid_date(inputDate){
		if(inputDate.match(/^\d{4}[.\/-]\d{2}[.\/-]\d{2}$/))
		{
			console.log("Valid date format. Check if it is really a valid date");
			var d = new Date(inputDate);
			if (isNaN(d.getTime()))
			{
				return false;
				//throw new Error("Invalid date");
			}
			else
			{
				// If we get till here, the date is good
				return true;
			}
		}
		console.log("Invalid date");
		return false;
	}
};