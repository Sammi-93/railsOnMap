function initMap() {
	
    var center = {lat: 22.9734, lng: 78.6569};
    var newDelhi = {lat: 28.644800, lng: 77.216721};
    var options = {
    	center: center,
  		zoom: 5			
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker({
    	position: newDelhi,
    	map: map
    });
    var stations = fetch('https://raw.githubusercontent.com/datameet/railways/master/stations.json')
  			    .then(response => response.json())
                .then(data => {
        		// Do what you want with your data

        			for (var i = 0; i < data.features.length; i++) {
        				if(data.features[i].geometry!=null) {
          			var coords = data.features[i].geometry.coordinates;
          			var latLng = new google.maps.LatLng(coords[1],coords[0]);
          			var marker = new google.maps.Marker({
            		position: latLng,
          	  		map: map
          		});
       		 }
       	}
     });
}

// function initialize() {

//   var markers = [];
//   var map = new google.maps.Map(document.getElementById('map-canvas'), {
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   var defaultBounds = new google.maps.LatLngBounds(
//       new google.maps.LatLng(34.083656, 74.797371),
//       new google.maps.LatLng(20.5937, 78.9629));
//   map.fitBounds(defaultBounds);

//   // Create the search box and link it to the UI element.
//   var input = /** @type {HTMLInputElement} */(
//       document.getElementById('pac-input'));
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//   var searchBox = new google.maps.places.SearchBox(
//     /** @type {HTMLInputElement} */(input));

//   // [START region_getplaces]
//   // Listen for the event fired when the user selects an item from the
//   // pick list. Retrieve the matching places for that item.
//   google.maps.event.addListener(searchBox, 'places_changed', function() {
//     var places = searchBox.getPlaces();

//     if (places.length == 0) {
//       return;
//     }
//     for (var i = 0, marker; marker = markers[i]; i++) {
//       marker.setMap(null);
//     }

//     // For each place, get the icon, place name, and location.
//     markers = [];
//     var bounds = new google.maps.LatLngBounds();
//     for (var i = 0, place; place = places[i]; i++) {
//       var image = {
//         url: place.icon,
//         size: new google.maps.Size(150, 150),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(10, 10)
//       };

//       // Create a marker for each place.
//       var marker = new google.maps.Marker({
//         map: map,
//         icon: image,
//         title: place.name,
//         position: place.geometry.location
//       });

//       markers.push(marker);

//       bounds.extend(place.geometry.location);
//     }

//     map.fitBounds(bounds);
//   });
//   // [END region_getplaces]

//   // Bias the SearchBox results towards places that are within the bounds of the
//   // current map's viewport.
//   google.maps.event.addListener(map, 'bounds_changed', function() {
//     var bounds = map.getBounds();
//     searchBox.setBounds(bounds);
//   });
// }
//  var stations = fetch('http://api.railwayapi.com/v2/name-number/train/14005/apikey/58d7ikf67k/')
//   			    .then(response => response.json())
//                 .then(data => {
//         		// Do what you want with your data
//         		console.log(data);
//      			});
 
 			

// google.maps.event.addDomListener(window, 'load', initialize);

// // function init() {
// //    var map = new google.maps.Map(document.getElementById('map'), {
// //      center: {
// //        lat: 12.9715987,
// //        lng: 77.59456269999998
// //      },
// //      zoom: 12
// //    });


// //    var searchBox = new google.maps.places.SearchBox(document.getElementById('train-search'));
// //    map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('train-search'));
// //    google.maps.event.addListener(searchBox, 'places_changed', function() {
// //      searchBox.set('map', null);


// //      var places = searchBox.getPlaces();

// //      var bounds = new google.maps.LatLngBounds();
// //      var i, place;
// //      for (i = 0; place = places[i]; i++) {
// //        (function(place) {
// //          var marker = new google.maps.Marker({

// //            position: place.geometry.location
// //          });
// //          marker.bindTo('map', searchBox, 'map');
// //          google.maps.event.addListener(marker, 'map_changed', function() {
// //            if (!this.getMap()) {
// //              this.unbindAll();
// //            }
// //          });
// //          bounds.extend(place.geometry.location);


// //        }(place));

// //      }
// //      map.fitBounds(bounds);
// //      searchBox.set('map', map);
// //      map.setZoom(Math.min(map.getZoom(),12));

// //    });
// //  }
// //  google.maps.event.addDomListener(window, 'load', init);
// // // function initMap() {
// // // 	// map options
// // // 	//var options = {
// // // 	//	zoom: 8,
// // // 	//	center: {lat:40.5937, lng:90.9629}
// // // 	//}
// // // 	var options = {
// // // 		center : {
// // // 			lat : 37,
// // // 			lng : -122
// // // 		},
// // // 		zoom: 10,
// // // 		disableDefault: true,
// // // 		scrollWheel: false,
// // // 		draggable: false,
// // // 		mapTypeId: google.maps.MapTypeId.ROADMAP,
// // // 		maxzoom: 11,
// // // 		minZoom: 9,
// // // 		zoomControlOptions: {
// // // 			position: google.maps.ControlPosition.LEFT_BOTTOM,
// // // 			style: google.maps.ZoomControlStyle.sSMALL
// // // 		},
// // // 		panControlOptions : {
// // // 			position: google.maps.ControlPosition.LEFT_BOTTOM
// // // 		}
// // // 	};	

// // // 	//new map
// // // 	var map = new google.maps.Map(document.getElementById('map'), options);
// // // 	//marker
	
// // // 	var marker = new google.maps.Marker ({
// // // 		position: {lat:20.5937, lng:78.9629},
// // // 		map: map,
// // // 		//	icon: 'images/train.png'
// // // 	});
// // // 	var infoWindow = new google.maps.InfoWindow({
// // // 		 content: '<h3>Centre of India</h3>'
// // // 	}); 
// // // 	marker.addListener('mouseover', function(){
// // // 		infoWindow.open(map, marker); 
// // // 	});

// // // 	addMarker({lat:40.5937, lng:90.9629});
// // // 	function addMarker(coords) {
// // // 		var marker = new google.maps.Marker ({
// // // 			position: coords,
// // // 			map: map,
// // // 		//	icon: 'images/train.png'
// // // 		});
// // // 	}
// // // 	// api
// // // 	let location = 'Delhi';
// // // 	geoCode();
// // // 	function geoCode() {
// // // 		axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
// // // 			params: {
// // // 				address:location,
// // // 				key: 'AIzaSyAaCgFkYUQ9OMKceYNhsSOgjvcQ9AHWBB0'
// // // 			}
// // // 		})
// // // 		.then(function(response){
// // // 			//console.log(response);

// // // 		})
// // // 		.catch(function(error){
// // // 			console.log(error);
// // // 		});
// // // 	}
// // // 	//Geolocation
// // // 	var map, infoWindow;
// // //       function initMap() {
// // //         map = new google.maps.Map(document.getElementById('map'), {
// // //           center: {lat: -34.397, lng: 150.644},
// // //           zoom: 6
// // //         });
// // //         infoWindow = new google.maps.InfoWindow;

// // //         // Try HTML5 geolocation.
// // //         if (navigator.geolocation) {
// // //           navigator.geolocation.getCurrentPosition(function(position) {
// // //             var pos = {
// // //               lat: position.coords.latitude,
// // //               lng: position.coords.longitude
// // //             };

// // //             infoWindow.setPosition(pos);
// // //             infoWindow.setContent('Location found.');
// // //             infoWindow.open(map);
// // //             map.setCenter(pos);
// // //           }, function() {
// // //             handleLocationError(true, infoWindow, map.getCenter());
// // //           });
// // //         } else {
// // //           // Browser doesn't support Geolocation
// // //           handleLocationError(false, infoWindow, map.getCenter());
// // //         }
// // //       }

// // //       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
// // //         infoWindow.setPosition(pos);
// // //         infoWindow.setContent(browserHasGeolocation ?
// // //                               'Error: The Geolocation service failed.' :
// // //                               'Error: Your browser doesn\'t support geolocation.');
// // //         infoWindow.open(map);
// // //       }
	
// // // 	// fetch('http://api.railwayapi.com/v2/live/train/14005/date/15-10-2017/apikey/58d7ikf67k/')
// // //  //    .then(response => response.json())
// // //  //    .then(data => {
// // //  //        // Do what you want with your data
// // //  //        console.log(data);
// // //  //    });
// // //  var searchBox = new google.maps.places.SearchBox(document.getElementById('train-search'));
	

	
// // // }