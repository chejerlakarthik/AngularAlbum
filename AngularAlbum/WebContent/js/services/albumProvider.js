album.service('albumProvider', albumProvider);

function albumProvider() {
    this.newAlbum = {};
    this.albumName = '';
    var albums = [{
        name: 'united kingdom'
        , title: 'United Kingdom 2014'
        , date: '2014-01-01'
        , desc: 'London, here I come'
        , albumName: 'United Kingdom'
        , imgUrl: 'img/london.jpg'
        , photos: [{
            filename: 'united kingdom-01.jpg'
            , description: 'The Iconic London bridge'
		}, {
            filename: 'united kingdom-02.jpg'
            , description: 'Lords - Home of Cricket'
		}]
	}, {
        name: 'thailand'
        , title: 'Thailand 2014'
        , date: '2014-06-09'
        , desc: 'Bangkok is a very beautiful place'
        , albumName: 'Thailand'
        , imgUrl: 'img/thailand.jpg'
        , photos: [{
            filename: 'thailand-01.jpg'
            , description: 'The City of Bangkok'
		}, {
            filename: 'thailand-02.jpg'
            , description: 'A Restaurant near by lake'
		}]
	}, {
        name: 'india'
        , title: 'India 2015'
        , date: '2015-01-01'
        , desc: 'India, better than all places I ve visited'
        , albumName: 'India'
        , imgUrl: 'img/india.jpg'
        , photos: [{
            filename: 'india-01.jpg'
            , description: 'Kashmir - Paradise on earth'
		}, {
            filename: 'india-02.jpg'
            , description: 'Taj Mahal - Architectural Heritage'
		}]
	}, {
        name: 'china'
        , title: 'China 2016'
        , date: '2016-01-01'
        , desc: 'I am visiting China next year. So excited!!'
        , albumName: 'China'
        , imgUrl: 'img/china.jpg'
        , photos: [{
            filename: 'china-01.jpg'
            , description: 'Great wall of China'
		}, {
            filename: 'china-02.jpg'
            , description: 'The City of Beijing'
		}]
	}];
    this.getAlbums = function () {
        console.log(albums);
        return albums;
    };
    this.getAlbumByName = function (albumName) {
        for (var i = 0; i < albums.length; i++) {
            if (albums[i].albumName.toLowerCase() === albumName.toLowerCase()) {
                return albums[i].photos;
            }
        }
    };
    this.addAlbum = function (newAlbum) {
        if (!newAlbum.title) {
            throw new Error("Title isnt entered!!");
        }
        else if (!newAlbum.date || !is_valid_date(newAlbum.date)) {
            throw new Error("Something is wrong with the date!!");
        }
        else if (!newAlbum.name) {
            throw new Error("Did you enter the album short name?");
        }
        else {
            newAlbum.imgUrl = 'img/' + newAlbum.name + '.jpg';
            newAlbum.albumName = newAlbum.name;
            newAlbum.photos = [{
                filename: newAlbum.name + '-01.jpg'
                , description: 'Description-1'
			}, {
                filename: newAlbum.name + '-02.jpg'
                , description: 'Description-2'
			}];
            albums.push(newAlbum);
            console.log(albums);
        }
    };

    function is_valid_date(inputDate) {
        if (inputDate instanceof Date) {
            var formattedDate = inputDate.getFullYear() + '/' + (inputDate.getMonth() + 1) + '/' + (inputDate.getDate() + 1);
            console.log(formattedDate);
        }
        if (formattedDate.match(/^\d{4}[.\/-]\d{2}[.\/-]\d{2}$/)) {
            console.log("Valid date format. Check if its really a valid date");
            var d = new Date(formattedDate);
            if (isNaN(d.getTime())) {
                console.log('Date Error');
                return false;
                // throw new Error("Invalid date");
            }
            else {
                // If we get till here, the date is good
                console.log('Date is good');
                return true;
            }
        }
        console.log("Invalid date : " + String(d));
        return false;
    };
}
