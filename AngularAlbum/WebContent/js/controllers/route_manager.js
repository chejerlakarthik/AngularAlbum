album.config(function ($routeProvider){
	$routeProvider
	.when("/albums", {controller : AlbumsListController, templateUrl: "html/album_list_partial.html"})
	.when("/404", {controller : AlbumsListController, templateUrl: "html/404_page.html"})
	.when("/", {redirectTo: "/albums"})
	.otherwise( {templateUrl: "html/404_page.html"} );
});