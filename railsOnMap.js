function initMap() {
	// map options
	//var options = {
	//	zoom: 8,
	//	center: {lat:40.5937, lng:90.9629}
	//}
	let options = {
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
	}*/
	
}