function initMap() {
	// map options
	//var options = {
	//	zoom: 8,
	//	center: {lat:40.5937, lng:90.9629}
	//}
	var options = {
		center : {
			lat : 37,
			lng : -122
		},
		zoom: 10,
		disableDefault: true,
		scrollWheel: false,
		draggable: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		maxzoom: 11,
		minZoom: 9,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
			style: google.maps.ZoomControlStyle.sSMALL
		},
		panControlOptions : {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	};	

	//new map
	var map = new google.maps.Map(document.getElementById('map'), options);
	//marker
	/*
	var marker = new google.maps.Marker ({
		position: {lat:20.5937, lng:78.9629},
		map: map,
		//	icon: 'images/train.png'
	});
	var infoWindow = new google.maps.InfoWindow({
		 content: '<h3>Centre of India</h3>'
	}); 
	marker.addListener('mouseover', function(){
		infoWindow.open(map, marker); 
	});

	addMarker({lat:40.5937, lng:90.9629});
	function addMarker(coords) {
		var marker = new google.maps.Marker ({
			position: coords,
			map: map,
		//	icon: 'images/train.png'
		});
	}
	// api
	let location = 'Delhi';
	geoCode();
	function geoCode() {
		axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
			params: {
				address:location,
				key: 'AIzaSyAaCgFkYUQ9OMKceYNhsSOgjvcQ9AHWBB0'
			}
		})
		.then(function(response){
			//console.log(response);

		})
		.catch(function(error){
			console.log(error);
		});
	}
	//Geolocation
	var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
	*/
	// fetch('http://api.railwayapi.com/v2/live/train/14005/date/15-10-2017/apikey/58d7ikf67k/')
 //    .then(response => response.json())
 //    .then(data => {
 //        // Do what you want with your data
 //        console.log(data);
 //    });
 var searchBox = new google.maps.places.SearchBox(document.getElementById('train-search'));
	

	
}