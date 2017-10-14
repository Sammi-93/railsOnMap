function initMap() {
	// map options
	var options = {
		zoom: 8,
		center: {lat:20.5937, lng:78.9629}
	}
	//new map
	var map = new google.maps.Map(document.getElementById('map'), options);
	//mark
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
}